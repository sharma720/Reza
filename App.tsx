import React from 'react'

const App: React.FC = () => {
  return (
    <main className="app">
      <header className="header">
        <h1>دبیرستان دخترانه عدالت</h1>
        <p className="subtitle">نسخه بازنویسی‌شده — آماده برای GitHub و Vercel</p>
      </header>

      <section className="card">
        <h2>شروع سریع</h2>
        <ol>
          <li>npm install</li>
          <li>npm run dev</li>
        </ol>
      </section>

      <footer className="footer">
        <small>توسعه‌دهنده: تیم بازنویسی</small>
      </footer>
    </main>
  )
}

export default App
