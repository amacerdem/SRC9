import React from 'react'

export default [
  {
    title: 'Architecture (Giriş)',
    subsections: ['Genel Bakış', 'Felsefe', 'Sistem Akışı'],
    body: (
      <>
        <h2 className="text-4xl font-bold gradient-arch mb-4">Genel Bakış</h2>
        <p>SRC⁹, Spectral–Resonance–Cognitive sisteminin genel mimarisini ve temel felsefesini açıklar...</p>
        <h3 className="text-3xl font-bold gradient-arch mb-2">Felsefe</h3>
        <p>Bu sistem, müzikte algı, rezonans ve bilişi birleştirir...</p>
        <h3 className="text-3xl font-bold gradient-arch mb-2">Sistem Akışı</h3>
        <table className="src-table mb-6">
          <thead>
            <tr><th>Aşama</th><th>Açıklama</th></tr>
          </thead>
          <tbody>
            <tr><td>S³</td><td>Spektral analiz ve temel ses modelleme</td></tr>
            <tr><td>R³</td><td>Rezonans tabanlı ilişkisel analiz</td></tr>
            <tr><td>C³</td><td>Bilişsel rezonans ve duygusal modelleme</td></tr>
          </tbody>
        </table>
      </>
    )
  },
  {
    title: 'S³ Module',
    subsections: ['Spektral Analiz', 'Çıktı Formatı', 'Bilimsel Dayanak'],
    body: <></>
  },
  {
    title: 'R³ Module',
    subsections: ['Rezonans Modeli', 'Vektörler', 'Bilimsel Dayanak'],
    body: <></>
  },
  {
    title: 'C³ Module',
    subsections: ['Bilişsel Devre', 'Üniteler', 'Uygulama Alanları'],
    body: <></>
  },
] 