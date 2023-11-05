export default function Scaffold({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <main className={"dynamic flex flex-col items-center justify-center p-4 md:p-10 " + className}>
      {children}
    </main>
  )
}