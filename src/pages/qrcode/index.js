import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const apkUrl = "../../assets/doctorapp.apk";

  return (
    <div>
      <h1>Download APK</h1>
      <QRCode value={apkUrl} size={256} />
    </div>
  );
};

export default QRCodeGenerator;
