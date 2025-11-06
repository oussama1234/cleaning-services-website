// Test script for email functionality
// Run with: node test-email.js

import { Resend } from 'resend';
import { bookingEmailTemplate, contactEmailTemplate } from './src/lib/emailTemplates.js';

const resend = new Resend('re_fkBf81td_uPD4XVsmDV4aKf5mVZu3pPKD');

async function testBookingEmail() {
  console.log('🧪 Testing Booking Email...\n');
  
  const testData = {
    name: 'Jean Dupont',
    phone: '+33 6 12 34 56 78',
    email: 'test@example.com',
    service: 'Plan Standard - $150/visite',
    date: '2025-11-10',
    time: '14:00'
  };

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'oussama.meq@gmail.com',
      subject: '🎯 Test - Nouvelle Réservation - Jean Dupont',
      html: bookingEmailTemplate(testData),
    });

    if (error) {
      console.error('❌ Booking Email Failed:', error);
      return false;
    }

    console.log('✅ Booking Email Sent Successfully!');
    console.log('📧 Email ID:', data.id);
    return true;
  } catch (error) {
    console.error('❌ Error:', error);
    return false;
  }
}

async function testContactEmail() {
  console.log('\n🧪 Testing Contact Email...\n');
  
  const testData = {
    name: 'Marie Martin',
    email: 'marie@example.com',
    phone: '+33 6 98 76 54 32',
    reason: 'quote',
    message: 'Bonjour, je souhaiterais obtenir un devis pour un nettoyage en profondeur de mon appartement de 80m². Merci!'
  };

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'oussama.meq@gmail.com',
      subject: '📨 Test - Nouveau Message de Contact - Marie Martin',
      html: contactEmailTemplate(testData),
    });

    if (error) {
      console.error('❌ Contact Email Failed:', error);
      return false;
    }

    console.log('✅ Contact Email Sent Successfully!');
    console.log('📧 Email ID:', data.id);
    return true;
  } catch (error) {
    console.error('❌ Error:', error);
    return false;
  }
}

// Run tests
(async () => {
  console.log('🚀 Starting Email Tests\n');
  console.log('=' . repeat(50));
  
  const bookingResult = await testBookingEmail();
  const contactResult = await testContactEmail();
  
  console.log('\n' + '='.repeat(50));
  console.log('\n📊 Test Results:');
  console.log(`   Booking Email: ${bookingResult ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`   Contact Email: ${contactResult ? '✅ PASS' : '❌ FAIL'}`);
  
  if (bookingResult && contactResult) {
    console.log('\n🎉 All tests passed! Email system is working correctly.');
    console.log('📬 Check your inbox at: oussama.meq@gmail.com\n');
  } else {
    console.log('\n⚠️  Some tests failed. Please check the errors above.\n');
  }
})();
