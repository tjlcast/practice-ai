import { NextRequest, NextResponse } from 'next/server';

// DeepSeek API配置
const DEEPSEEK_API_URL = process.env.DEEPSEEK_API_URL || 'https://api.deepseek.com/v1/chat/completions';
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || '';
const DEEPSEEK_DEFAULT_MODEL = process.env.DEEPSEEK_DEFAULT_MODEL || 'deepseek-chat';

export async function POST(request: NextRequest) {
  try {
    const { image, model = DEEPSEEK_DEFAULT_MODEL } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: '没有提供图像数据' },
        { status: 400 }
      );
    }

    // 检查API密钥
    if (!DEEPSEEK_API_KEY) {
      console.warn('DeepSeek API密钥未设置，使用模拟响应');
      // 返回模拟响应用于开发
      return NextResponse.json({
        guess: getMockGuess(),
        confidence: Math.random() * 0.5 + 0.5, // 0.5-1.0之间的随机置信度
        isMock: true
      });
    }

    // 提取base64图像数据（移除data:image/png;base64,前缀）
    const base64Image = image.replace(/^data:image\/\w+;base64,/, '');

    // 构建DeepSeek API请求
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
        body: JSON.stringify({
          model: model,
        messages: [
          {
            role: 'system',
            content: '你是一个图像识别专家。用户会提供一张手绘图像的base64编码，你需要分析图像内容并猜测用户画的是什么。请用简洁的中文回答，只给出猜测结果，不要解释。如果无法确定，可以给出最可能的猜测。'
          },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: '请分析这张手绘图像，猜猜我画的是什么？图像是base64编码的PNG格式。'
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/png;base64,${base64Image}`
                }
              }
            ]
          }
        ],
        max_tokens: 50,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('DeepSeek API错误:', response.status, errorData);
      
      // API调用失败时返回模拟响应
      return NextResponse.json({
        guess: getMockGuess(),
        confidence: 0.6,
        isMock: true,
        error: `API调用失败: ${response.status}`
      });
    }

    const data = await response.json();
    const guess = data.choices?.[0]?.message?.content?.trim() || '无法识别';

    return NextResponse.json({
      guess,
      confidence: 0.8,
      isMock: false
    });

  } catch (error) {
    console.error('猜测处理错误:', error);
    
    // 发生错误时返回模拟响应
    return NextResponse.json({
      guess: getMockGuess(),
      confidence: 0.5,
      isMock: true,
      error: '处理请求时发生错误'
    });
  }
}

// 模拟猜测函数，用于开发环境
function getMockGuess(): string {
  const mockGuesses = [
    '一只猫',
    '一条狗',
    '一朵花',
    '一棵树',
    '一座房子',
    '一辆汽车',
    '一个太阳',
    '一个月亮',
    '一颗星星',
    '一条鱼',
    '一只鸟',
    '一只蝴蝶',
    '一个苹果',
    '一个香蕉',
    '一个人脸',
    '一个笑脸',
    '一个爱心',
    '一朵云',
    '一座山',
    '一片海洋'
  ];
  
  return mockGuesses[Math.floor(Math.random() * mockGuesses.length)];
}

// 添加GET方法用于测试
export async function GET() {
  return NextResponse.json({
    message: 'AI你画我猜API已就绪',
    status: '运行中',
    mockMode: !process.env.DEEPSEEK_API_KEY,
    instructions: '发送POST请求，包含{ image: "base64图像数据", model: "模型名称(可选)" }',
    config: {
      apiUrl: DEEPSEEK_API_URL,
      defaultModel: DEEPSEEK_DEFAULT_MODEL,
      hasApiKey: !!DEEPSEEK_API_KEY
    }
  });
}