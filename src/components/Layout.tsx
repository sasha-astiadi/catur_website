import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
<<<<<<< HEAD
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
=======
        <div className="flex w-full max-w-7xl lg:px-4">
          <div className="w-full bg-[#f8f8f5] dark:bg-black" />
>>>>>>> source/main
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
<<<<<<< HEAD
        <main className="flex-auto">{children}</main>
=======
        <main className="flex-auto pt-6 sm:pt-0">{children}</main>
>>>>>>> source/main
        <Footer />
      </div>
    </>
  )
}
