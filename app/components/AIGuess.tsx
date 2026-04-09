'use client';

interface AIGuessProps {
  onGuess: () => void;
  isGuessing: boolean;
  guessResult: string;
}

export default function AIGuess({ onGuess, isGuessing, guessResult }: AIGuessProps) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      padding: '1.5rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937'
        }}>🤖 AI 猜测</h3>
        <div style={{
          padding: '0.25rem 0.75rem',
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          color: 'white',
          fontSize: '0.875rem',
          fontWeight: '500',
          borderRadius: '9999px'
        }}>
          实时分析
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {/* 猜测按钮 */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onGuess}
            disabled={isGuessing}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: '0.75rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              transition: 'all 0.2s',
              transform: 'scale(1)',
              border: 'none',
              cursor: isGuessing ? 'not-allowed' : 'pointer',
              background: isGuessing ? '#d1d5db' : 'linear-gradient(to right, #2563eb, #7c3aed)',
              color: isGuessing ? '#6b7280' : 'white',
              boxShadow: isGuessing ? 'none' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
            onMouseOver={(e) => {
              if (!isGuessing) {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.background = 'linear-gradient(to right, #1d4ed8, #6d28d9)';
              }
            }}
            onMouseOut={(e) => {
              if (!isGuessing) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'linear-gradient(to right, #2563eb, #7c3aed)';
              }
            }}
            onMouseDown={(e) => {
              if (!isGuessing) {
                e.currentTarget.style.transform = 'scale(0.98)';
              }
            }}
            onMouseUp={(e) => {
              if (!isGuessing) {
                e.currentTarget.style.transform = 'scale(1.02)';
              }
            }}
          >
            {isGuessing ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  border: '2px solid white',
                  borderTop: '2px solid transparent',
                  borderRadius: '9999px',
                  animation: 'spin 1s linear infinite'
                }} />
                <span>AI正在思考中...</span>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🔍</span>
                <span>让AI猜猜我画的是什么</span>
              </div>
            )}
          </button>
          <p style={{
            marginTop: '0.75rem',
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            点击按钮，AI将分析你的画作并给出猜测
          </p>
        </div>

        {/* 猜测结果 */}
        <div style={{
          background: 'linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontSize: '1.25rem' }}>🤔</span>
            </div>
            <div>
              <h4 style={{
                fontWeight: 'bold',
                color: '#1f2937'
              }}>AI的猜测</h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280'
              }}>基于你的画作内容分析</p>
            </div>
          </div>

          {guessResult ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(to right, #dcfce7, #dbeafe)',
                    borderRadius: '9999px',
                    marginBottom: '0.75rem'
                  }}>
                    <span style={{
                      color: '#059669',
                      fontWeight: '500'
                    }}>猜测结果</span>
                  </div>
                  <p style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    wordBreak: 'break-word'
                  }}>
                    {guessResult}
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                <button
                  onClick={onGuess}
                  disabled={isGuessing}
                  style={{
                    flex: 1,
                    padding: '0.5rem 1rem',
                    background: '#f3f4f6',
                    color: '#374151',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: isGuessing ? 'not-allowed' : 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => {
                    if (!isGuessing) {
                      e.currentTarget.style.background = '#e5e7eb';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isGuessing) {
                      e.currentTarget.style.background = '#f3f4f6';
                    }
                  }}
                >
                  重新猜测
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(guessResult)}
                  style={{
                    flex: 1,
                    padding: '0.5rem 1rem',
                    background: '#dbeafe',
                    color: '#1d4ed8',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#bfdbfe'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#dbeafe'}
                >
                  复制结果
                </button>
              </div>
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '2rem 0'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '1rem',
                background: '#f3f4f6',
                borderRadius: '9999px',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.875rem' }}>🎨</span>
              </div>
              <p style={{
                color: '#4b5563'
              }}>
                画一些内容，然后点击上面的按钮让AI来猜猜看！
              </p>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                marginTop: '0.5rem'
              }}>
                AI会尝试识别你画的物体、动物或场景
              </p>
            </div>
          )}
        </div>

        {/* 准确度提示 */}
        <div style={{
          background: '#fef3c7',
          border: '1px solid #fde68a',
          borderRadius: '0.5rem',
          padding: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem'
          }}>
            <div style={{
              color: '#d97706',
              fontSize: '1.25rem'
            }}>💡</div>
            <div>
              <p style={{
                fontSize: '0.875rem',
                color: '#92400e',
                fontWeight: '500'
              }}>
                提示：AI的准确度取决于画作的清晰度
              </p>
              <p style={{
                fontSize: '0.75rem',
                color: '#92400e',
                marginTop: '0.25rem'
              }}>
                尽量使用清晰的线条和简单的形状，AI能更好地识别
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}