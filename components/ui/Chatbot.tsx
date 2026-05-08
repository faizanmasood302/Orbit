'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatbotProps {
  className?: string;
}

export function Chatbot({ className = '' }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string; id: number }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isSubmittingRef = useRef(false);
  const messageIdRef = useRef(0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setIsOpening(true);
    } else {
      setIsOpening(false);
    }
  }, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || isSubmittingRef.current) return;

    isSubmittingRef.current = true;
    const userMessage = inputValue.trim();
    setInputValue('');
    const currentId = messageIdRef.current++;
    const newMessages = [...messages, { role: 'user' as const, content: userMessage, id: currentId }];
    setMessages(newMessages);

    try {
      await fetchChat(newMessages);
    } finally {
      isSubmittingRef.current = false;
    }
  };

  const fetchChat = async (msgs: { role: 'user' | 'assistant'; content: string }[]) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: msgs }),
      });

      if (!response.ok) throw new Error('Failed');

      const reply = await response.text();
      const replyId = messageIdRef.current++;
      setMessages((prev) => [...prev, { role: 'assistant' as const, content: reply || 'Hello! How can I help?', id: replyId }]);
    } catch {
      const errorId = messageIdRef.current++;
      setMessages((prev) => [...prev, { role: 'assistant' as const, content: 'Sorry, something went wrong.', id: errorId }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 ${className}`}>
      {isOpen && (
        <div 
          className={`
            w-[380px] h-[520px] 
            bg-[#0c0c0f] 
            border border-[#ffffff08] 
            rounded-3xl 
            overflow-hidden 
            flex flex-col 
            shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]
            transition-all duration-500 ease-out
            ${isOpening ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}
          `}
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#ffffff08] flex items-center justify-between bg-[#ffffff03]">
            <div className="flex items-center gap-4">
<div className="relative">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/10 to-transparent flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0c0c0f]" />
              </div>
              <div>
                <h3 className="text-base font-medium text-white tracking-wide">Aria</h3>
                <p className="text-[11px] text-[#6366f1] font-medium tracking-wider uppercase">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-[#ffffff08] transition-all duration-200 group"
            >
              <svg className="w-4 h-4 text-[#ffffff50] group-hover:text-white/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-gradient-to-b from-transparent to-[#ffffff02]">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/10 to-transparent flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px] text-[#a855f7]">chat_bubble</span>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6366f1]/30 to-transparent blur-xl opacity-50" />
                </div>
                <p className="text-[15px] text-white/90 font-medium mb-1">Hello! I&apos;m Aria</p>
                <p className="text-[12px] text-white/40 max-w-[200px] text-center leading-relaxed">Your AI assistant, here to help you with any questions</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {['Services', 'Pricing', 'Get a quote'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setInputValue(suggestion);
                      }}
                      className="px-3 py-1.5 text-[11px] text-white/60 bg-[#ffffff08] hover:bg-[#ffffff12] border border-[#ffffff06] rounded-full hover:border-[#6366f1]/30 transition-all duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-lg shadow-purple-500/20'
                      : 'bg-[#ffffff08] text-white/85 border border-[#ffffff06]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-200">
                <div className="bg-[#ffffff08] border border-[#ffffff06] px-5 py-4 rounded-2xl">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span 
                        key={i} 
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] animate-pulse" 
                        style={{ 
                          animationDelay: `${i * 150}ms`,
                          animationDuration: '800ms'
                        }} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-[#ffffff08] bg-[#ffffff02]">
            <div className="relative flex items-center gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-3.5 pr-12 bg-[#ffffff08] border border-[#ffffff10] rounded-2xl text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#6366f1]/50 focus:bg-[#ffffff10] transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 p-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 group"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative w-14 h-14 rounded-2xl 
          bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7]
          flex items-center justify-center 
          shadow-[0_8px_32px_rgba(99,102,241,0.4),0_0_0_1px_rgba(255,255,255,0.1)]
          hover:shadow-[0_12px_40px_rgba(99,102,241,0.5),0_0_0_1px_rgba(255,255,255,0.2)]
          transition-all duration-300 hover:scale-105
          ${isOpen ? 'rotate-90' : ''}
        `}
      >
        {isOpen ? (
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0c0c0f] animate-pulse" />
        )}
      </button>
    </div>
  );
}