import React, { useState } from 'react';

const App = () => {
  const [showFullSpanish, setShowFullSpanish] = useState(false);
  const [hoveredLine, setHoveredLine] = useState(null);
  const [isEquationMode, setIsEquationMode] = useState(false);

  const decimaLines = [
    "lb",
    "Γ(",
    "√",
    "9) 1²",
    "/2",
    "∫₃⁵",
    "1⁵",
    "∜",
    "5⁸ dt",
    "= 25"
  ];

  const spanishTranslations = [
    "Logaritmo base dos",
    "de la función gama de",
    "la raíz cuadrada de",
    "nueve por uno a la dos",
    "dividido sobre dos",
    "integral de tres a cinco",
    "de uno elevado a la cinco",
    "por la raíz cuarta de",
    "cinco a la octava de te",
    "es igual a veinticinco."
  ];

  const linearEquation = "lb Γ(√9) 1²/2 ∫₃⁵ 1⁵ ∜5⁸ dt = 25";

  const handleLineClick = () => {
    setShowFullSpanish(!showFullSpanish);
  };

  const toggleMode = () => {
    setIsEquationMode(!isEquationMode);
    setShowFullSpanish(false);
    setHoveredLine(null);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      padding: '2rem',
      backgroundColor: '#f9fafb',
      fontFamily: 'Arial, sans-serif'
    },
    wrapper: {
      maxWidth: '56rem',
      margin: '0 auto'
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: '600',
      marginBottom: '2rem',
      color: '#111827'
    },
    button: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '0.375rem',
      fontWeight: '500',
      cursor: 'pointer',
      marginBottom: '1.5rem'
    },
    cardsContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '2rem',
      flexWrap: 'wrap'
    },
    card: {
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      padding: '2rem',
      minWidth: '20rem',
      flex: '1',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#1f2937'
    },
    equation: {
      fontSize: '1.125rem',
      fontFamily: 'monospace',
      backgroundColor: '#f9fafb',
      padding: '1rem',
      borderRadius: '0.375rem',
      border: '1px solid #e5e7eb',
      wordBreak: 'break-all'
    },
    decimaLine: {
      position: 'relative',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      marginBottom: '0.25rem'
    },
    lineText: {
      fontSize: '1.25rem',
      fontFamily: 'monospace',
      color: '#111827'
    },
    tooltip: {
      position: 'absolute',
      left: '100%',
      marginLeft: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#fffbeb',
      border: '1px solid #fde68a',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.375rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      whiteSpace: 'nowrap',
      zIndex: 10,
      fontSize: '0.875rem',
      color: '#374151',
      fontStyle: 'italic'
    },
    spanishCard: {
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      padding: '2rem',
      maxWidth: '28rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    spanishLine: {
      color: '#111827',
      fontStyle: 'normal',
      lineHeight: '1.625',
      marginBottom: '0.25rem'
    },
    footer: {
      marginTop: '2rem',
      fontSize: '0.875rem',
      color: '#4b5563'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>25</h1>
        
        <button 
          onClick={toggleMode} 
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
        >
          {isEquationMode ? 'Mostrar Poema' : 'Mostrar Ecuación Lineal'}
        </button>

        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            {isEquationMode ? (
              <div>
                <h2 style={styles.sectionTitle}>Forma Lineal de la Ecuación</h2>
                <div style={styles.equation}>{linearEquation}</div>
              </div>
            ) : (
              <div>
                {decimaLines.map((line, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.decimaLine,
                      backgroundColor: hoveredLine === index ? '#f9fafb' : 'transparent'
                    }}
                    onMouseEnter={() => !showFullSpanish && setHoveredLine(index)}
                    onMouseLeave={() => setHoveredLine(null)}
                    onClick={handleLineClick}
                  >
                    <div style={styles.lineText}>{line}</div>
                    
                    {hoveredLine === index && !showFullSpanish && (
                      <div style={styles.tooltip}>
                        {spanishTranslations[index]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {showFullSpanish && !isEquationMode && (
            <div style={styles.spanishCard}>
              <h2 style={styles.sectionTitle}>Décima en Español</h2>
              <div>
                {spanishTranslations.map((line, index) => (
                  <div key={index} style={styles.spanishLine}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={styles.footer}>
          <p style={{marginBottom: '0.25rem'}}>Esta décima contiene exactamente 25 símbolos y su resultado es 25.</p>
          <p>Pasa el cursor sobre cada línea para ver la traducción, o haz clic para ver el texto completo.</p>
        </div>
      </div>
    </div>
  );
};

export default App;