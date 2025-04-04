import Link from "next/link"
import { Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Building className="h-6 w-6" />
              <span className="text-xl font-bold">Strata One</span>
            </div>
            <p className="text-sm text-muted-foreground">Managing your strata property with ease and transparency.</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/owners-portal" className="text-muted-foreground hover:text-foreground">
                  Owners Portal
                </Link>
              </li>
              <li>
                <Link href="/committee" className="text-muted-foreground hover:text-foreground">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-muted-foreground hover:text-foreground">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/documents" className="text-muted-foreground hover:text-foreground">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/bylaws" className="text-muted-foreground hover:text-foreground">
                  By-Laws
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-muted-foreground hover:text-foreground">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">123 Strata Street, Sydney NSW 2000</li>
              <li className="text-muted-foreground">info@strataone.com.au</li>
              <li className="text-muted-foreground">+61 2 1234 5678</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Strata One. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

