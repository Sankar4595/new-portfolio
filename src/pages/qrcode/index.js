import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const apkUrl =
    "https://drive.google.com/uc?export=download&id=1x4UHu0xfC1gALEtrxHULwJgQrv7AY_yX";

  return (
    <div>
      <h1>Download APK</h1>
      <QRCode value={apkUrl} size={256} />
    </div>
  );
};

export default QRCodeGenerator;
