"use client"

import { useState, useCallback } from "react"

export interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

export function useChatbotState() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      type: "bot",
      content:
        "Hi! I'm the Med Monitor assistant. I can answer your questions about our health monitoring app, features, security, and help you download it. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const addMessage = useCallback((type: "user" | "bot", content: string) => {
    const newMessage: Message = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
    return newMessage
  }, [])

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: "greeting",
        type: "bot",
        content:
          "Hi! I'm the Med Monitor assistant. I can answer your questions about our health monitoring app, features, security, and help you download it. What would you like to know?",
        timestamp: new Date(),
      },
    ])
  }, [])

  return {
    messages,
    isOpen,
    setIsOpen,
    inputValue,
    setInputValue,
    isLoading,
    setIsLoading,
    addMessage,
    clearMessages,
  }
}
