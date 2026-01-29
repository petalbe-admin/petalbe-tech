// Klaro configuration
var klaroConfig = {
    cookieName: 'klaro-consent',
    cookieExpiresAfterDays: 365,
    privacyPolicy: '/privacypolicy.html',
    
    // Use the simpler notice style
    mustConsent: true,
    acceptAll: true,
    
    translations: {
        en: {
            consentNotice: {
                description: 'We use cookies to analyze site traffic and improve your experience.',
            },
            acceptAll: 'Accept all',
            acceptSelected: 'Accept selected',
            decline: 'Decline',
        },
    },
    
    services: [
        {
            name: 'analytics',
            title: 'Analytics',
            purposes: ['analytics'],
            required: false,
            default: false,
            description: 'Helps us understand how visitors use our website.',
        },
    ],
};
