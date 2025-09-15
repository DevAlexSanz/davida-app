import { Shield, Mail, Eye, Lock, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-balance">Privacy Policy</h1>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Introduction</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            At MinimalByte, we respect your privacy and are committed to
            protecting your personal information. This privacy policy explains
            how we collect, use, and protect your information when you use our
            application.
          </p>
        </section>
        <section className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b">
            <Eye className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Information We Collect</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            When you register in our application using Google Authentication, we
            only collect:
          </p>
          <div className="border-l-4 border-muted-foreground/20 pl-6 py-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Email Address</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Obtained through your Google account to create and manage your
                  user profile.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            <strong>Important note:</strong> We do not collect or store any
            other personal information such as your name, profile picture, or
            any other data from your Google account.
          </p>
        </section>
        <section className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b">
            <UserCheck className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">
              How We Use Your Information
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Your email address is used exclusively for:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-foreground">
                  User identification:
                </strong>
                <span className="text-muted-foreground">
                  {" "}
                  Create and maintain your account on our platform.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-foreground">Authentication:</strong>
                <span className="text-muted-foreground">
                  {" "}
                  Verify your identity when accessing the application.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-foreground">
                  Essential communications:
                </strong>
                <span className="text-muted-foreground">
                  {" "}
                  Send you important notifications about your account or service
                  changes.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b">
            <Lock className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Data Protection</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your information:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 py-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Data encryption in transit and at rest
              </span>
            </div>
            <div className="flex items-center gap-3 py-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Restricted access to personal information
              </span>
            </div>
            <div className="flex items-center gap-3 py-2">
              <UserCheck className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Secure authentication through Google OAuth
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b">
            <UserCheck className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Your Rights</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
              <span className="text-sm">
                Access your personal information that we have stored
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
              <span className="text-sm">
                Request correction of incorrect information
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
              <span className="text-sm">
                Request deletion of your account and associated data
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
              <span className="text-sm">Withdraw your consent at any time</span>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Contact</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this privacy policy or wish to exercise
            your rights, you can contact us:
          </p>
          <div className="border-l-4 border-muted-foreground/20 pl-6 py-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">alexander@minimalbyte.dev</p>
                <p className="text-sm text-muted-foreground">
                  We will respond to your inquiry within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export { PrivacyPolicy };
