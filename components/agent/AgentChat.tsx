'use client';

import { useChat } from '@ai-sdk/react';
import { Send, Bot, X, MessageCircle, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

function ChatContent() {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat();
  const isLoading = status === 'streaming' || status === 'submitted';

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = inputValue.trim();
    if (!text || isLoading) return;
    setInputValue('');
    sendMessage({ text });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="relative flex flex-col items-end">
      {open && (
        <div className="absolute bottom-16 right-0 mb-3 w-80 sm:w-96 h-[450px] flex flex-col rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--orbit-accent)] to-[var(--orbit-highlight)] flex items-center justify-center shrink-0">
                <Bot size={18} className="text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[var(--orbit-surface)] animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-none font-['Syne']">Aria</p>
              <p className="text-xs text-white/40 mt-0.5">AI Assistant</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              {isLoading ? (
                <span className="text-xs text-[var(--orbit-accent)]">Thinking…</span>
              ) : (
                <span className="text-xs text-white/30">Online</span>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && !error && (
              <div className="text-center py-8 px-4">
                <div className="relative inline-flex mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--orbit-accent)] to-[var(--orbit-highlight)] flex items-center justify-center">
                    <Sparkles size={28} className="text-white" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-[var(--orbit-surface)] rounded-full flex items-center justify-center border border-white/10">
                    <Bot size={12} className="text-[var(--orbit-accent)]" />
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Hi! I'm Aria. Ask me about Orbit — services, pricing, or getting started.
                </p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-red-400 text-sm">Connection error. Please try again.</p>
              </div>
            )}

            {messages.map((m: any) => {
              const textContent = m.parts
                ? (m.parts as any[])
                    .filter((p: any) => 'text' in p)
                    .map((p: any) => p.text)
                    .join('')
                : m.content ?? '';
              
              if (!textContent.trim()) return null;
              
              return (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-gradient-to-r from-[var(--orbit-accent)] to-[#7c3aed] text-white rounded-br-md'
                        : 'bg-white/8 text-white/90 border border-white/5 rounded-bl-md'
                    }`}
                  >
                    {textContent}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/8 border border-white/5 rounded-2xl rounded-bl-md px-4 py-3">
                  <span className="flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-[var(--orbit-accent)] animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-white/5 shrink-0">
            <div className="flex gap-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Aria anything…"
                autoComplete="off"
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-full text-sm bg-white/5 border border-white/10
                           text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--orbit-accent)]
                           focus:ring-2 focus:ring-[var(--orbit-accent)]/20 transition-all disabled:opacity-40"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 bg-gradient-to-r from-[var(--orbit-accent)] to-[#7c3aed] hover:opacity-90 text-white rounded-full
                           disabled:opacity-30 transition-all shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close Aria chat' : 'Open Aria chat'}
        className="flex items-center justify-center w-13 h-13 rounded-full
                   bg-gradient-to-r from-[var(--orbit-accent)] to-[#7c3aed] text-white 
                   shadow-lg shadow-[var(--orbit-accent)]/30 hover:shadow-[var(--orbit-accent)]/50
                   transition-all duration-200 hover:scale-105 active:scale-95"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}

function AgentChatWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="flex items-center justify-center w-13 h-13 rounded-full
                     bg-gradient-to-r from-[var(--orbit-accent)] to-[#7c3aed] text-white 
                     shadow-lg shadow-[var(--orbit-accent)]/30"
        >
          <MessageCircle size={22} />
        </button>
      </div>
    );
  }

  return <ChatContent />;
}

export { AgentChatWrapper as AgentChat };