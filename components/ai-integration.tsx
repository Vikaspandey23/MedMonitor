import { Sparkles, Brain, Zap } from "lucide-react"

export default function AIIntegration() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI & Voice Control Powered</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized health insights and control everything with your voice for truly hands-free operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Smart Health Insights</h3>
                <p className="text-muted-foreground">
                  AI analyzes your health trends and provides actionable recommendations
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Predictive Alerts</h3>
                <p className="text-muted-foreground">
                  Get ahead with predictions of potential health issues before they occur
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Hands-Free Voice Commands</h3>
                <p className="text-muted-foreground">
                  Control the app entirely with natural voice commands for convenience
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm font-semibold mb-2">Voice Command Example</p>
                <p className="text-sm text-muted-foreground italic">"Show me my health summary for today"</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm font-semibold mb-2">AI Recommendation</p>
                <p className="text-sm text-muted-foreground">
                  Based on your activity, try to increase your daily steps by 15% and drink more water to improve
                  hydration levels.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm font-semibold mb-2">Predictive Alert</p>
                <p className="text-sm text-muted-foreground">
                  Your sleep quality has been declining. Consider scheduling a consultation with a sleep specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
