'use client';

import { useState } from 'react';
import Canvas from './components/Canvas';
import DrawingTools from './components/DrawingTools';
import AIGuess from './components/AIGuess';

export default function Home() {
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState('#000000');
  const [currentImage, setCurrentImage] = useState('');
  const [isGuessing, setIsGuessing] = useState(false);
  const [guessResult, setGuessResult] = useState('');

  const handleDraw = (imageData: string) => {
    setCurrentImage(imageData);
  };

  const handleGuess = async () => {
    if (!currentImage) {
      alert('请先画一些内容！');
      return;
    }

    setIsGuessing(true);
    setGuessResult('');

    try {
      const response = await fetch('/api/guess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: currentImage }),
      });

      if (!response.ok) {
        throw new Error('猜测失败');
      }

      const data = await response.json();
      setGuessResult(data.guess || data.error || '无法识别');
    } catch (error) {
      console.error('猜测错误:', error);
      setGuessResult('猜测失败，请重试');
    } finally {
      setIsGuessing(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2ff 100%)',
      padding: '1rem',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    }}>
      <header style={{
        maxWidth: '72rem',
        margin: '0 auto 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.25rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          🎨 AI 你画我猜
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#4b5563'
        }}>
          在画布上作画，让AI猜猜你画的是什么！
        </p>
      </header>

      <main style={{
        maxWidth: '72rem',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }}>
          {/* 左侧：画布和工具 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              padding: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937'
                }}>绘画区域</h2>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  在画布上绘制你的作品
                </div>
              </div>
              
              <Canvas
                width={600}
                height={400}
                onDraw={handleDraw}
                lineWidth={lineWidth}
                lineColor={lineColor}
              />
            </div>

            <DrawingTools
              lineWidth={lineWidth}
              lineColor={lineColor}
              onLineWidthChange={setLineWidth}
              onLineColorChange={setLineColor}
            />
          </div>

          {/* 右侧：AI猜测区域 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <AIGuess
              onGuess={handleGuess}
              isGuessing={isGuessing}
              guessResult={guessResult}
            />

            <div style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>游戏说明</h3>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                color: '#4b5563'
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '1.5rem',
                    height: '1.5rem',
                    background: '#dbeafe',
                    color: '#2563eb',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.5rem',
                    flexShrink: 0
                  }}>1</span>
                  <span>使用左侧工具调整画笔大小和颜色</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '1.5rem',
                    height: '1.5rem',
                    background: '#dbeafe',
                    color: '#2563eb',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.5rem',
                    flexShrink: 0
                  }}>2</span>
                  <span>在画布上绘制你想要表达的内容</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '1.5rem',
                    height: '1.5rem',
                    background: '#dbeafe',
                    color: '#2563eb',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.5rem',
                    flexShrink: 0
                  }}>3</span>
                  <span>点击"让AI猜猜"按钮，查看AI的猜测结果</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '1.5rem',
                    height: '1.5rem',
                    background: '#dbeafe',
                    color: '#2563eb',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.5rem',
                    flexShrink: 0
                  }}>4</span>
                  <span>可以尝试绘制简单的物体、动物或场景</span>
                </li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '1rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              padding: '1.5rem',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>💡 提示</h3>
              <p style={{
                marginBottom: '0.75rem'
              }}>AI更擅长识别：</p>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                color: '#dbeafe'
              }}>
                <li>• 简单的几何形状</li>
                <li>• 常见的动物和物体</li>
                <li>• 清晰的轮廓和线条</li>
                <li>• 避免过于复杂的细节</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer style={{
        maxWidth: '72rem',
        margin: '3rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        <p>AI 你画我猜游戏 | 使用 DeepSeek API 进行图像识别</p>
        <p style={{
          marginTop: '0.25rem'
        }}>在画布上尽情创作，看看AI能否猜中你的画作！</p>
      </footer>
    </div>
  );
}
