export default function PlatformWorkflow() {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Sign up and set up your health profile with your medical history and preferences",
    },
    {
      number: 2,
      title: "Choose Your Service",
      description: "Select from consultations, prescriptions, or medical record management",
    },
    {
      number: 3,
      title: "Meet Your Doctor",
      description: "Connect with verified healthcare professionals through secure video calls",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How our <span className="text-primary">platform</span> works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and efficient healthcare at your fingertips
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              {step.number < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-2xl text-primary">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <img src="/healthcare-platform-interface-dashboard.jpg" alt="Platform dashboard" className="rounded-2xl shadow-lg w-full" />
        </div>
      </div>
    </section>
  )
}
