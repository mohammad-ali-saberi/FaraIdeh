import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get('title') || 'فراایده';
    const category = searchParams.get('category') || '';
    const author = searchParams.get('author') || 'فراایده';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '60px',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Category Badge */}
            {category && (
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                  display: 'flex',
                }}
              >
                {category}
              </div>
            )}

            {/* Logo/Brand */}
            <div
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              فراایده
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 0,
                lineHeight: 1.2,
                textAlign: 'right',
                width: '100%',
                display: 'flex',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              }}
            >
              {title}
            </h1>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
              }}
            >
              fara-ideh.ir
            </div>

            {author && (
              <div
                style={{
                  fontSize: 24,
                  color: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span>نویسنده: {author}</span>
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.error('Failed to generate OG image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
