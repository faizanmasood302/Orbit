'use client';

import { useState, useRef, useEffect } from 'react';
import { api } from '@/lib/api';
import { Icon } from '@/components/ui/Icon';

type Message = { role: 'user' | 'assistant'; content: string };

function ChatContent() {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = inputValue.trim();
    if (!text || isLoading) return;
    setInputValue('');
    setError(null);

    const updatedMessages = [...messages, { role: 'user' as const, content: text }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      let full = '';
      for await (const ev of api.chatStream(updatedMessages)) {
        if (ev.t) { full += ev.t; setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: full }]); }
      }
      setMessages(prev => prev.map((m, i) => i === prev.length - 1 ? { ...m, content: full || 'No response' } : m));
    } catch (err) {
      setMessages(prev => prev.slice(0, -1));
      setError(err instanceof Error ? err.message : 'Connection error');
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="absolute bottom-16 right-0 mb-3 w-80 sm:w-96 h-[450px] flex flex-col rounded-2xl overflow-hidden glass-card border border-white/30 shadow-xl shadow-primary/10">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-primary/5 shrink-0 bg-white/40">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center shrink-0">
                <Icon name="smart_toy" className="text-white text-[18px]" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface leading-none">Aria</p>
              <p className="text-xs text-on-surface-variant mt-0.5">AI Assistant</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              {isLoading ? (
                <span className="text-xs text-primary">Thinking&hellip;</span>
              ) : (
                <span className="text-xs text-on-surface-variant">Online</span>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/30">
            {messages.length === 0 && !error && (
              <div className="text-center py-8 px-4">
                <div className="relative inline-flex mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center">
                    <Icon name="auto_awesome" className="text-white text-[28px]" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-primary/10">
                    <Icon name="smart_toy" className="text-primary text-[12px]" />
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Hi! I&apos;m Aria. Ask me about Orbit &mdash; services, pricing, or getting started.
                </p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-red-600 text-sm">Connection error. Please try again.</p>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-primary to-secondary-container text-white rounded-br-md'
                      : 'bg-white/70 text-on-surface border border-primary/5 rounded-bl-md'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/70 border border-primary/5 rounded-2xl rounded-bl-md px-4 py-3">
                  <span className="flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-primary/5 shrink-0 bg-white/40">
            <div className="flex gap-2">
              <input
                data-testid="chat-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Aria anything&hellip;"
                autoComplete="off"
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-full text-sm bg-white/60 border border-outline-variant
                           text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary
                           focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-40"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 bg-gradient-to-r from-primary to-secondary-container hover:opacity-90 text-white rounded-full
                           disabled:opacity-30 transition-all shrink-0"
              >
                <Icon name="send" className="text-[16px]" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        data-testid="chat-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close Aria chat' : 'Open Aria chat'}
        className="flex items-center justify-center w-13 h-13 rounded-full
                   bg-gradient-to-r from-primary to-secondary-container text-white
                   shadow-lg shadow-primary/30 hover:shadow-primary/50
                   transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <Icon name={open ? 'close' : 'chat'} className="text-[22px]" />
      </button>
    </div>
  );
}

function AgentChatWrapper() {
  return <ChatContent />;
}

export { AgentChatWrapper as AgentChat };
