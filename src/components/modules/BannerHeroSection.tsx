import Banner from "@/assets/icons/Banner"
import { useUserQuery } from "@/redux/features/user/userApi"
import { Link } from "react-router"

export default function BannerHeroSection() {
  const { data: userData } = useUserQuery(undefined)

  return (
    <section className="lg:grid lg:h-screen lg:place-content-center bg-background text-foreground transition-colors duration-300">
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-8 lg:py-32">
        {/* --- Left side content --- */}
        <div className="max-w-prose text-left space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Welcome to{" "}
            <span className="text-primary">
              Digital Wallet
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Manage your money smarter — make secure payments, track transactions, 
            and stay in control of your finances anytime, anywhere.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              to={userData?.data?.email ? "/transaction" : "/login"}
              className="inline-block rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>

            <Link
              to="/about"
              className="inline-block rounded-md border border-input px-5 py-3 font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* --- Right side image/banner --- */}
        <div className="mt-10 md:mt-0 flex justify-center">
          <Banner/>
        </div>
      </div>
    </section>
  )
}
