import Loading from '@/components/Loading/Loading';
import { useEffect, useState } from 'react';
import { InstagramContainerStyle, InstagramInnerContainerStyle } from './Instagram.css';

export default function Instagram() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;

    script.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={InstagramContainerStyle()}>
      <Loading show={loading}></Loading>

      <div className={InstagramInnerContainerStyle({ show: !loading })}>
        <div style={{ overflow: 'hidden', maxHeight: '130px' }}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/roverredovisning/"
            data-instgrm-version="12"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '100%',
              overflow: 'hidden',
            }}
            dangerouslySetInnerHTML={{
              __html: `
            <div style="padding:16px;">
              <a
                href="https://www.instagram.com/roverredovisning/"
                style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style="display: flex; flex-direction: row; align-items: center;">
                  <div style="background-color: #F4F4F4; border-radius: 50%; height: 40px; width: 40px; margin-right: 14px;"></div>
                  <div style="display: flex; flex-direction: column; justify-content: center;">
                    <div style="background-color: #F4F4F4; border-radius: 4px; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                    <div style="background-color: #F4F4F4; border-radius: 4px; height: 14px; width: 60px;"></div>
                  </div>
                </div>
                <div style="padding-top: 8px;">
                  <div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-weight:550; line-height:18px;">
                    View this profile on Instagram
                  </div>
                </div>
              </a>
            </div>
          `,
            }}
          />
        </div>
      </div>
    </div>
  );
}
