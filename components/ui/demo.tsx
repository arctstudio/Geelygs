"use client";

import AdmitOneTicket from "./admit-one-ticket";

export default function AdmitOneTicketDemo() {
  return (
    <div className="flex min-h-[640px] w-full items-center justify-center bg-[#281d14] p-8">
      <AdmitOneTicket
        name="Geely Gading Serpong"
        presenter="Geely Auto Indonesia presents"
        event="Promo Spesial 2026"
        venue="Gading Serpong, Tangerang"
        dates="Edisi Terbatas 2026"
        stubText="Klaim Promo"
        watermark="2026"
        width={741}
      />
    </div>
  );
}
