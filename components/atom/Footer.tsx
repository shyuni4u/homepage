export default function Footer() {
  return (
    <footer className="text-center mt-20 py-6 border-t dark:border-slate-800 print:hidden">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        &copy; {new Date().getFullYear()} Kim Seon-woo. All rights reserved.
      </p>
    </footer>
  )
}