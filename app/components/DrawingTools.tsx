'use client';

interface DrawingToolsProps {
  lineWidth: number;
  lineColor: string;
  onLineWidthChange: (width: number) => void;
  onLineColorChange: (color: string) => void;
}

export default function DrawingTools({
  lineWidth,
  lineColor,
  onLineWidthChange,
  onLineColorChange,
}: DrawingToolsProps) {
  const brushSizes = [2, 5, 10, 15, 20];
  const colors = [
    '#000000', // 黑色
    '#FF0000', // 红色
    '#00FF00', // 绿色
    '#0000FF', // 蓝色
    '#FFFF00', // 黄色
    '#FF00FF', // 紫色
    '#00FFFF', // 青色
    '#FFA500', // 橙色
  ];

  return (
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
      }}>绘画工具</h3>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {/* 画笔大小 */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem'
          }}>
            <label style={{
              color: '#374151',
              fontWeight: '500'
            }}>画笔大小</label>
            <span style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>{lineWidth}px</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <input
              type="range"
              min="1"
              max="30"
              value={lineWidth}
              onChange={(e) => onLineWidthChange(parseInt(e.target.value))}
              style={{
                flex: 1,
                height: '0.5rem',
                background: '#e5e7eb',
                borderRadius: '0.25rem',
                cursor: 'pointer'
              }}
            />
            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              {brushSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => onLineWidthChange(size)}
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    background: lineWidth === size ? '#dbeafe' : '#f3f4f6',
                    border: lineWidth === size ? '2px solid #3b82f6' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (lineWidth !== size) {
                      e.currentTarget.style.background = '#e5e7eb';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (lineWidth !== size) {
                      e.currentTarget.style.background = '#f3f4f6';
                    }
                  }}
                  title={`${size}px`}
                >
                  <div
                    style={{
                      borderRadius: '9999px',
                      background: '#1f2937',
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 颜色选择 */}
        <div>
          <label style={{
            color: '#374151',
            fontWeight: '500',
            marginBottom: '0.75rem',
            display: 'block'
          }}>颜色选择</label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.75rem'
          }}>
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => onLineColorChange(color)}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  background: color,
                  border: 'none',
                  cursor: 'pointer',
                  transform: lineColor === color ? 'scale(1.05)' : 'scale(1)',
                  outline: lineColor === color ? '4px solid #93c5fd' : 'none',
                  outlineOffset: '2px'
                }}
                onMouseOver={(e) => {
                  if (lineColor !== color) {
                    e.currentTarget.style.outline = '2px solid #d1d5db';
                  }
                }}
                onMouseOut={(e) => {
                  if (lineColor !== color) {
                    e.currentTarget.style.outline = 'none';
                  }
                }}
                title={color}
              />
            ))}
          </div>
          
          {/* 自定义颜色 */}
          <div style={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <label style={{
              color: '#374151',
              fontWeight: '500',
              whiteSpace: 'nowrap'
            }}>
              自定义颜色:
            </label>
            <input
              type="color"
              value={lineColor}
              onChange={(e) => onLineColorChange(e.target.value)}
              style={{
                width: '3rem',
                height: '3rem',
                cursor: 'pointer',
                borderRadius: '0.5rem',
                border: '1px solid #d1d5db'
              }}
            />
            <div style={{ flex: 1 }}>
              <input
                type="text"
                value={lineColor}
                onChange={(e) => onLineColorChange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  color: '#374151'
                }}
                placeholder="#000000"
              />
            </div>
          </div>
        </div>

        {/* 当前设置预览 */}
        <div style={{
          paddingTop: '1rem',
          borderTop: '1px solid #e5e7eb'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              color: '#374151',
              fontWeight: '500'
            }}>当前设置预览</div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '9999px',
                    border: '1px solid #d1d5db',
                    background: lineColor
                  }}
                />
                <span style={{
                  fontSize: '0.875rem',
                  color: '#4b5563'
                }}>{lineColor}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div
                  style={{
                    borderRadius: '9999px',
                    background: '#1f2937',
                    width: `${lineWidth}px`,
                    height: `${lineWidth}px`,
                  }}
                />
                <span style={{
                  fontSize: '0.875rem',
                  color: '#4b5563'
                }}>{lineWidth}px</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}