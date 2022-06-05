/**
 * memo: Luu cac gia tri qua mot bien ben ngoai.
 * Su dung useCallback phai di kem voi memo
 */

import { useEffect, useState } from 'react';

function Content() {
  const [avatar, setAvatar] = useState();

  const handleAvatarPreview = (e) => {
    const image = e.target.files;

    if (!image.length) return;
    setAvatar({ urlSrc: URL.createObjectURL(image[0]) });
  };

  useEffect(() => {
    return () => {
      if (avatar) URL.revokeObjectURL(avatar.urlSrc);
    };
  }, [avatar]);

  return (
    <>
      <input type="file" onChange={handleAvatarPreview} accept="image/*" />
      {avatar && <img src={avatar.urlSrc} alt="" width="80%" />}
    </>
  );
}
export default Content;
