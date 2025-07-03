export default function Footer() {
  return (
    <footer className="mt-20 border-t py-6 text-center dark:border-slate-800 print:hidden">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        &copy; {new Date().getFullYear()} Kim Seon-woo. All rights reserved.
      </p>
    </footer>
  )
}
