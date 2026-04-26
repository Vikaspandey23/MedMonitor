import { chatbotFAQs, disclaimers } from "./chatbot-data"

export function findBestMatch(userInput: string): string | null {
  const lowerInput = userInput.toLowerCase()

  // Keywords mapping to FAQ IDs
  const keywordMap: Record<string, number[]> = {
    "what is med monitor": [1],
    "what is": [1],
    features: [2],
    book: [3],
    appointment: [3],
    consultation: [3, 9],
    doctor: [3, 9],
    security: [4],
    secure: [4],
    data: [4],
    encrypt: [4],
    emergency: [5],
    sos: [5],
    help: [5],
    family: [6],
    track: [6],
    technology: [7],
    "tech stack": [7],
    cost: [8],
    price: [8],
    "24/7": [9],
    available: [9],
    export: [10],
    download: [-1], // Special case for download
  }

  // Find best matching FAQ
  for (const [keyword, faqIds] of Object.entries(keywordMap)) {
    if (lowerInput.includes(keyword)) {
      if (faqIds[0] === -1) {
        // Special case for download
        return "download"
      }
      const faqId = faqIds[0]
      const faq = chatbotFAQs.find((f) => f.id === faqId)
      return faq ? faq.answer : null
    }
  }

  return null
}

export function getBotResponse(userInput: string): string {
  const match = findBestMatch(userInput)

  if (match === "download") {
    return `Great! Here are the download options:\n\n📱 Download Med Monitor:\n• iOS: https://apps.apple.com/app/medmonitor\n• Android: https://play.google.com/store/apps/details?id=com.medmonitor\n\nThank you for choosing Med Monitor for your health management!`
  }

  if (match) {
    return `${match}\n\n${disclaimers[0]} Would you like to know more or download the app?`
  }

  return `I'm not sure about that, but I can help you with:\n• Features & capabilities\n• Doctor consultations\n• Emergency features\n• Data security\n• Technology stack\n• Pricing\n• Downloading the app\n\nFeel free to ask any of these topics!`
}
