import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Generator() {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.font = '40px Arial';
    ctx.fillText(text, 50, 200);
    setImageUrl(canvas.toDataURL('image/png'));
  };

  return (
    <div>
      <input
        type="text"
        placeholder={t('input_placeholder')}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={generateImage} style={{ marginLeft: '10px', padding: '10px' }}>
        {t('generate')}
      </button>
      {imageUrl && (
        <div style={{ marginTop: '20px' }}>
          <img src={imageUrl} alt="Generated" />
        </div>
      )}
    </div>
  );
}
