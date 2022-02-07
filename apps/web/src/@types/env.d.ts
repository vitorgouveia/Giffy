declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FORM_URL: string;
      NEXT_PUBLIC_GIFFY_STUDIO_PAYMENT_LINK: string;
      NEXT_PUBLIC_GIFFY_BUSINESS_PAYMENT_LINK: string;
    }
  }
}

export {}
