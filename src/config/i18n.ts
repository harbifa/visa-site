import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    common: {
      "navigation": {
        "home": "Home",
        "about": "About",
        "about_us": "About Us",
        "blog": "Blog",
        "services": "Services",
        "contact": "Contact",
        "pay_online": "Pay Online"
      },
      "company": {
        "name": "Shawamek Visa Immigration",
        "description": "Since 2016, we are experts in Immigration Services. Serving in the GCC with certified & reliable Immigration Consultant professionals.",
        "credentials": "ICCRC Registered Associates",
        "location": "Shwamek, Saudi Arabia",
        "phone": "+966501367513",
        "email": "info@shawmekimmigration.com"
      },
      "countries": {
        "canada": "Canada",
        "australia": "Australia",
        "uk": "United Kingdom",
        "europe": "Europe",
        "usa": "USA",
        "germany": "Germany"
      },
      "visa_types": {
        "visit_visas": "Visit Visas",
        "immigration_visas": "Immigration Visas",
        "work_permits": "Work Permits",
        "study_visas": "Study Visas",
        "spouse_visa": "Spouse Visa",
        "family_visa": "Family Visa"
      },
      "services": {
        "express_entry": "Express Entry Visa",
        "provincial_nomination": "Provincial Nomination Program",
        "atlantic_pilot": "Atlantic Immigration Pilot",
        "skilled_nominated": "Skilled Nominated Visa",
        "sole_representative": "Sole Representative Program",
        "job_seeker": "Job Seeker Visa",
        "e2_treaty": "E2 Treaty Investor Visa",
        "eb5_investor": "EB-5 Immigrant Investor",
        "student_visa": "Student Visa",
        "visit_visa": "Visit Visa"
      },
      "footer": {
        "useful_links": "Useful Links",
        "countries_visas": "Countries Visas",
        "get_in_touch": "Get in Touch",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "disclaimer": "Disclaimer",
        "cookie_policy": "Cookie Policy",
        "refund_policy": "Refund Policy",
        "copyright": "Copyright ©2016-2024. All Rights Reserved by Shawamek Visa Immigration."
      },
      "common": {
        "more_services": "more services"
      },
      "payment": {
        "title": "Pay Online",
        "subtitle": "Secure payment processing via Moyasar",
        "back_to_home": "Back to Home",
        "payment_information": "Payment Information",
        "personal_information": "Personal Information",
        "service_details": "Service Details",
        "billing_address": "Billing Address",
        "payment_summary": "Payment Summary",
        "payment_security": "Payment Security",
        "need_help": "Need Help?",
        "accepted_payment_methods": "Accepted Payment Methods",
        "form": {
          "full_name": "Full Name",
          "email_address": "Email Address",
          "phone_number": "Phone Number",
          "amount": "Amount (SAR)",
          "service_type": "Service Type",
          "additional_details": "Additional Details",
          "address": "Address",
          "city": "City",
          "select_service": "Select Service Type",
          "placeholder_name": "Enter your full name",
          "placeholder_email": "your.email@example.com",
          "placeholder_phone": "+966 50 123 4567",
          "placeholder_amount": "0.00",
          "placeholder_address": "Enter your address",
          "placeholder_city": "Enter your city",
          "placeholder_details": "Any additional information about your service request..."
        },
        "services": {
          "express_entry": "Express Entry Visa",
          "pnp": "Provincial Nomination Program",
          "study_visa": "Study Visa",
          "visit_visa": "Visit Visa",
          "work_permit": "Work Permit",
          "family_visa": "Family/Spouse Visa",
          "business_visa": "Business Visa",
          "consultation": "Consultation Services",
          "document_translation": "Document Translation",
          "other": "Other Services"
        },
        "summary": {
          "service": "Service:",
          "amount": "Amount:",
          "total": "Total:",
          "not_selected": "Not selected"
        },
        "security": {
          "powered_by": "Powered by Moyasar - Saudi's trusted payment gateway",
          "pci_compliant": "PCI DSS Level 1 compliant",
          "ssl_encryption": "256-bit SSL encryption",
          "payment_methods": "Supports all major payment methods"
        },
        "contact": {
          "support_available": "Our support team is available 24/7 to assist you with your payment."
        },
        "payment_methods": {
          "visa": "Visa",
          "mastercard": "Mastercard",
          "mada": "Mada",
          "apple_pay": "Apple Pay",
          "stc_pay": "STCPay",
          "bank_transfer": "Bank Transfer",
          "secure_processing": "All payment methods are processed securely through Moyasar"
        },
        "buttons": {
          "submit": "Proceed to Moyasar Payment",
          "processing": "Preparing Payment..."
        },
        "errors": {
          "payment_error": "Payment Error",
          "required_fields": "Please fill in all required fields",
          "invalid_amount": "Please enter a valid amount greater than 0",
          "invalid_email": "Please enter a valid email address",
          "payment_failed": "Payment failed:",
          "connection_error": "Failed to connect to payment service",
          "unexpected_error": "An unexpected error occurred"
        },
        "notices": {
          "secure_payment": "Secure Payment via Moyasar",
          "redirect_notice": "After submitting this form, you will be redirected to Moyasar's secure payment gateway to complete your payment with your preferred payment method."
        }
      },
      "payment_callback": {
        "success_title": "Payment Successful",
        "failed_title": "Payment Failed",
        "pending_title": "Payment Processing",
        "loading_title": "Checking Payment...",
        "processing_title": "Processing Payment...",
        "success_message": "Your payment has been successfully received. We will contact you soon to follow up.",
        "failed_message": "Payment processing failed. Please try again or contact technical support.",
        "pending_message": "Your payment is being processed. We will contact you as soon as the payment is confirmed.",
        "loading_message": "Checking payment status...",
        "payment_details": "Payment Details",
        "payment_id": "Transaction ID",
        "amount": "Amount",
        "service": "Service",
        "customer": "Customer",
        "date": "Date",
        "download_receipt": "Download Invoice",
        "return_home": "Return to Home",
        "whats_next": "What's Next?",
        "try_again": "Try Again",
        "contact_support": "Contact Support",
        "continue_home": "Return to Home",
        "support_message": "If you have any questions, don't hesitate to contact us",
        "next_steps": {
          "email_confirmation": "You will receive a confirmation email",
          "team_contact": "Our team will contact you within 24 hours"
        }
      },
      "home": {
        "hero": {
          "title": "Hi, How Can We Help You?",
          "subtitle1": "We are reliable immigration consultants to handle your immigration case",
          "subtitle2": "Move To Your Dream Country",
          "subtitle3": "Talk to one of our best consultants today",
          "contact_cta": "Immigration Experts Will Contact You"
        },
        "form": {
          "title": "Fill Free Assessment Form",
          "full_name": "Full Name",
          "email": "Email Address",
          "phone": "Phone Number",
          "select_country": "Select Destination Country",
          "select_visa": "Select Visa Type",
          "message": "Additional Message",
          "submit": "Submit Assessment",
          "sending": "Sending...",
          "success_title": "Your request has been sent successfully!",
          "success_desc": "Our immigration experts will contact you as soon as possible.",
          "error_title": "Error sending your request",
          "error_desc": "Please try again or contact us directly at info@shawmekimmigration.com",
          "sending_title": "Sending your request...",
          "sending_desc": "Please wait, do not refresh the page."
        },
        "visa_options": {
          "work": "Work Permit",
          "study": "Study Visa",
          "visit": "Visit Visa",
          "immigration": "Permanent Residence",
          "family": "Family/Spouse Visa"
        },
        "about": {
          "title": "Who We Are",
          "subtitle": "Since 2016 we are experts in Immigration Services",
          "desc1": "We have an expert team to create great value for immigration. Our certified & reliable Immigration Consultant professionals can help you get a positive decision on your case.",
          "desc2": "Services provided from Our ICCRC Registered Associates. We've been Providing Consultancy Services For Immigration Opportunities in Foreign Countries.",
          "desc3": "Each and every consultant hired at our company has been through our 6 months aggressive internal training program that consists of eight different courses.",
          "serving": "Serving in the GCC since 2018",
          "stats": {
            "cases": "Successful Cases",
            "experience": "Years Experience"
          }
        },
        "visa_categories": {
          "title": "Popular Visa Categories",
          "subtitle": "We provide comprehensive visa services for all your immigration needs",
          "visit_desc": "Tourist and business visit visas for all countries",
          "immigration_desc": "Permanent residence and citizenship pathways",
          "work_desc": "Employment-based visas and work authorization",
          "study_desc": "Student visas for universities worldwide"
        },
        "countries_section": {
          "title": "Choose Your Country",
          "subtitle": "We provide immigration services all over the world and for universities globally",
          "canada_desc": "Express Entry, Provincial Nomination, Study & Work Permits",
          "australia_desc": "Skilled Migration, Study Visa, Partner & Family Visas",
          "uk_desc": "Student Visa, Work Permits, Visit & Business Visas",
          "europe_desc": "Germany Job Seeker, Study Visa, EU Blue Card",
          "discover_more": "Discover More"
        },
        "testimonials": {
          "title": "About Our Customer Say",
          "subtitle": "Our Satisfied Customers",
          "join": "Join students over 1000+ like you"
        },
        "news": {
          "title": "Latest News & Resources",
          "subtitle": "Stay updated with the latest immigration news and helpful resources",
          "read_more": "Read More",
          "read_more_articles": "Read More articles from Resources & News",
          "articles": {
            "canada_jobs": {
              "title": "Top 9 Most Demand Jobs In Canada",
              "excerpt": "Discover the highest demand professions in Canada for immigration through Express Entry and Provincial Nomination Programs."
            },
            "saskatchewan": {
              "title": "Ways to Immigrate to Saskatchewan",
              "excerpt": "Complete guide to Saskatchewan Provincial Nominee Program and immigration pathways available."
            },
            "australia_skilled": {
              "title": "Australia Skilled Migration Updates 2024",
              "excerpt": "Latest changes in Australian immigration policies and new opportunities for skilled workers."
            }
          }
        },
        "testimonials_data": {
          "amanda": {
            "name": "Amanda Rivera",
            "country": "Germany",
            "visa": "Work Permit Visa",
            "feedback": "Helped me throughout the process of my work permit visa. Professional service and excellent guidance."
          },
          "muhammad": {
            "name": "Muhammad Ahmad",
            "country": "Australia",
            "visa": "Spouse Visa",
            "feedback": "Provided me complete guidance about my spouse visa. Made the complex process very simple."
          },
          "henry": {
            "name": "Henry Morgan",
            "country": "Canada",
            "visa": "Study Visa",
            "feedback": "Excellent consulting for students. Helped fulfill my dream of studying abroad in Canada."
          }
        }
      },
      "about": {
        "title": "About Our Company",
        "subtitle": "Since 2016, we are experts in Immigration Services, providing reliable consultancy for your immigration journey",
        "story_title": "Our Story",
        "story_p1": "Since 2016, we have been dedicated experts in Immigration Services, building a reputation as reliable immigration consultants who handle each case with utmost care and professionalism.",
        "story_p2": "Our expert team creates great value for immigration by providing certified & reliable Immigration Consultant professionals who can help you get a positive decision on your case.",
        "story_p3": "We provide services from our ICCRC Registered Associates and have been providing consultancy services for immigration opportunities in foreign countries across the globe.",
        "story_p4": "Each and every consultant hired at our company has been through our comprehensive 6 months aggressive internal training program that consists of eight different specialized courses.",
        "achievements_title": "Our Achievements",
        "achievements_subtitle": "Serving in the GCC since 2016 with outstanding results",
        "achievements_clients": "Satisfied Clients",
        "achievements_countries": "Countries Served",
        "achievements_experience": "Years Experience",
        "achievements_success": "Success Rate",
        "services_title": "Our Services",
        "services_subtitle": "Comprehensive immigration and document clearing services",
        "team_title": "Our Expert Team",
        "team_subtitle": "Certified professionals dedicated to your immigration success",
        "team_experience": "experience",
        "why_title": "Why Choose Us?",
        "why_iccrc_title": "ICCRC Registered",
        "why_iccrc_desc": "All our services are provided by ICCRC registered associates ensuring compliance and reliability.",
        "why_training_title": "Expert Training",
        "why_training_desc": "6-month intensive training program with 8 specialized courses for all our consultants.",
        "why_gcc_title": "GCC Presence",
        "why_gcc_desc": "Serving in the GCC region since 2016 with deep understanding of local needs."
      }
    },
    pages: {
      canada: {
        hero: {
          title: "Immigration to Canada",
          subtitle: "Your pathway to permanent residence in one of the world's most welcoming countries",
          cta: "Start Your Assessment"
        },
        why_choose: {
          title: "Why Choose Canada?",
          subtitle: "Canada offers some of the world's best immigration programs with multiple pathways to permanent residence and citizenship.",
          benefits: [
            "High quality of life and excellent healthcare system",
            "Excellent education system",
            "Multicultural and tolerant society",
            "Strong economy with diverse job opportunities",
            "Path to Canadian citizenship",
            "Social benefits and security"
          ]
        },
        programs: {
          title: "Canadian Immigration Programs",
          subtitle: "Choose the right path for your Canadian immigration journey",
          express_entry: {
            name: "Express Entry System",
            description: "Federal Skilled Worker Program, Canadian Experience Class, and Federal Skilled Trades",
            requirements: [
              "Bachelor's degree or equivalent",
              "IELTS 6.0+ overall",
              "At least 1 year skilled work experience",
              "Age 18-35 preferred"
            ],
            processing: "6-8 months"
          },
          pnp: {
            name: "Provincial Nominee Program (PNP)",
            description: "Provincial-specific immigration programs for skilled workers",
            requirements: [
              "Skills aligned with provincial needs",
              "Work experience in target occupation",
              "Language proficiency",
              "Intention to live in nominating province"
            ],
            processing: "8-12 months"
          },
          atlantic: {
            name: "Atlantic Immigration Pilot Program",
            description: "Immigration program for Atlantic provinces",
            requirements: [
              "Job offer from Atlantic employer",
              "Work experience",
              "Educational credentials",
              "Language abilities"
            ],
            processing: "6-9 months"
          },
          study: {
            name: "Study Visa",
            description: "Study permits for international students",
            requirements: [
              "Letter of acceptance from DLI",
              "Proof of financial support",
              "Clean criminal record check",
              "Medical exam if required"
            ],
            processing: "4-12 weeks"
          },
          visit: {
            name: "Visit Visa",
            description: "Temporary residence visa for tourism and business",
            requirements: [
              "Valid passport",
              "Proof of financial support",
              "Ties to home country",
              "Purpose of visit"
            ],
            processing: "2-4 weeks"
          },
          family: {
            name: "Family/Spouse Visa",
            description: "Family reunification and spouse sponsorship",
            requirements: [
              "Eligible sponsor in Canada",
              "Proof of relationship",
              "Meet financial requirements",
              "Medical and criminal checks"
            ],
            processing: "12-24 months"
          }
        },
        process: {
          title: "Our Process",
          subtitle: "Step-by-step guidance for your Canadian immigration",
          steps: [
            {
              title: "Initial Assessment",
              description: "Evaluate your eligibility and recommend the best program"
            },
            {
              title: "Document Preparation",
              description: "Assist in gathering and preparing all required documents"
            },
            {
              title: "Application Submission",
              description: "Submit your complete Canadian immigration application"
            },
            {
              title: "Follow-up & Support",
              description: "Monitor your application and provide ongoing support"
            }
          ]
        },
        cta: {
          title: "Ready to Start Your Canadian Journey?",
          subtitle: "Our certified immigration consultants are here to guide you through every step of the process.",
          primary_btn: "Free Assessment",
          secondary_btn: "Book Consultation"
        }
      },
      australia: {
        hero: {
          title: "Immigration to Australia",
          subtitle: "Discover opportunities in the land down under with our expert guidance",
          cta: "Start Your Journey"
        },
        why_choose: {
          title: "Why Choose Australia?",
          subtitle: "Australia offers excellent opportunities for skilled migrants with its strong economy, high quality of life, and welcoming immigration policies.",
          benefits: [
            "High living standards and work-life balance",
            "World-class education and healthcare systems",
            "Diverse and multicultural society",
            "Strong economy with excellent job opportunities",
            "Beautiful climate and natural environment",
            "Path to Australian citizenship"
          ]
        },
        cities: {
          title: "Popular Australian Cities",
          subtitle: "Explore the best cities to live and work in Australia",
          sydney: {
            name: "Sydney",
            description: "Economic hub with iconic harbor and beaches"
          },
          melbourne: {
            name: "Melbourne",
            description: "Cultural capital known for arts and coffee culture"
          },
          brisbane: {
            name: "Brisbane",
            description: "Sunny climate and growing tech sector"
          }
        },
        programs: {
          title: "Australian Immigration Programs",
          subtitle: "Find the right visa pathway for your Australian dream",
          skilled: {
            name: "Skilled Nominated Visa (Subclass 190)",
            description: "State or territory nominated skilled migration",
            requirements: [
              "Skilled occupation on relevant list",
              "Skills assessment",
              "English language proficiency",
              "Age under 45",
              "State nomination"
            ],
            processing: "8-11 months"
          },
          study: {
            name: "Study Visa (Subclass 500)",
            description: "Student visa for international education",
            requirements: [
              "Confirmation of Enrolment (CoE)",
              "Genuine Temporary Entrant requirement",
              "Financial capacity",
              "English language proficiency",
              "Health insurance"
            ],
            processing: "4-6 weeks"
          },
          visit: {
            name: "Visit Visa (Subclass 600)",
            description: "Visitor visa for tourism and business",
            requirements: [
              "Valid passport",
              "Financial evidence",
              "Health requirements",
              "Character requirements",
              "Genuine visitor intent"
            ],
            processing: "2-4 weeks"
          },
          spouse: {
            name: "Spouse Visa (Subclass 820/801)",
            description: "Partner visa for married or de facto partners",
            requirements: [
              "Australian citizen/permanent resident sponsor",
              "Evidence of genuine relationship",
              "Health and character checks",
              "Financial requirements"
            ],
            processing: "12-24 months"
          }
        },
                  process: {
            title: "Our Process",
            subtitle: "Step-by-step guide to your Australian immigration",
            steps: [
              {
                title: "Skills Assessment",
                description: "Evaluate your qualifications and determine eligibility"
              },
              {
                title: "Expression of Interest",
                description: "Submit EOI through SkillSelect system"
              },
              {
                title: "Invitation to Apply",
                description: "Receive invitation and lodge visa application"
              },
              {
                title: "Visa Approval",
                description: "Complete processing and receive your visa"
              }
            ]
          },
          cta: {
            title: "Ready to Start Your Australian Journey?",
            subtitle: "Our certified immigration consultants are here to guide you through every step of the process.",
            primary_btn: "Free Assessment",
            secondary_btn: "Book Consultation"
          }
        },
      uk: {
        hero: {
          title: "Immigrate to United Kingdom",
          subtitle: "Discover opportunities in Great Britain with its rich heritage and outstanding education",
          cta: "Explore Opportunities"
        },
        why_choose: {
          title: "Why Choose the United Kingdom?",
          subtitle: "The United Kingdom offers exceptional opportunities for skilled professionals with its rich heritage in education and innovation.",
          benefits: [
            "World-class education with prestigious universities",
            "Strong and resilient economy",
            "Rich cultural heritage and history",
            "Outstanding career opportunities",
            "Comprehensive healthcare system (NHS)",
            "Path to British citizenship"
          ]
        },
        programs: {
          title: "UK Visa Programs",
          subtitle: "Find the right visa for your UK goals",
          skilled: {
            name: "Skilled Worker Visa",
            description: "Visa for skilled professionals with a job offer in the UK",
            requirements: [
              "Job offer from licensed sponsor",
              "Required skill level",
              "Minimum salary £25,600",
              "English language proficiency",
              "Visa fees and healthcare surcharge"
            ],
            processing: "3-8 weeks"
          },
          study: {
            name: "Student Visa",
            description: "Visa to study at a licensed educational institution in the UK",
            requirements: [
              "Acceptance letter from licensed institution",
              "Proof of financial capacity",
              "English language competency",
              "Additional health insurance",
              "TB test if required"
            ],
            processing: "3-6 weeks"
          },
          visit: {
            name: "Standard Visitor Visa",
            description: "Short-term visa for tourism and business",
            requirements: [
              "Valid passport",
              "Proof of financial support",
              "Clear travel plan",
              "Strong ties to home country",
              "Travel insurance"
            ],
            processing: "3-6 weeks"
          },
          family: {
            name: "Family Visa",
            description: "Visa for spouse/partner and family members",
            requirements: [
              "Genuine relationship with British citizen/resident",
              "Financial income requirement",
              "English language proficiency",
              "Criminal record checks",
              "TB medical test"
            ],
            processing: "8-24 weeks"
          }
        },
        process: {
          title: "Our Process",
          subtitle: "Professional guide to UK immigration",
          steps: [
            {
              title: "Eligibility Assessment",
              description: "Comprehensive evaluation of your qualifications and options"
            },
            {
              title: "Application Preparation",
              description: "Preparation of all required documents and forms"
            },
            {
              title: "Visa Submission",
              description: "Submit visa application and follow up"
            },
            {
              title: "Post-arrival Support",
              description: "Assistance with relocation and settlement"
            }
          ]
        },
        cta: {
          title: "Ready to Start Your British Journey?",
          subtitle: "Our certified immigration consultants are here to guide you through every step of the process.",
          primary_btn: "Free Assessment",
          secondary_btn: "Book Consultation"
        }
      },
      usa: {
        hero: {
          title: "Move to United States",
          subtitle: "Achieve the American Dream through investment, education, and family immigration programs",
          cta: "Start Your Journey"
        },
        why_choose: {
          title: "Why Choose the USA?",
          subtitle: "The United States offers unparalleled opportunities for business, education, and personal growth in the world's most dynamic economy.",
          benefits: [
            "World's largest economy with vast opportunities",
            "Leading universities and research institutions",
            "Diverse cultural landscape and experiences",
            "Innovation hub for technology and business",
            "Strong legal system and property rights",
            "Path to American citizenship"
          ]
        },
        investment: {
          title: "Investment Immigration Options",
          subtitle: "Secure your US residency through strategic investment",
          options: [
            {
              type: "EB-5 Regional Center",
              amount: "$800,000",
              description: "Investment in targeted employment areas through approved regional centers",
              jobs: "Creates 10 indirect jobs"
            },
            {
              type: "EB-5 Direct Investment",
              amount: "$1,050,000",
              description: "Direct investment in new commercial enterprise",
              jobs: "Creates 10 direct jobs"
            },
            {
              type: "E2 Investment",
              amount: "$100,000+",
              description: "Substantial investment in US business (non-immigrant)",
              jobs: "Proportional to investment"
            }
          ]
        },
        cities: {
          title: "Major US Cities",
          subtitle: "Explore the best American cities for business and living",
          new_york: {
            name: "New York City",
            description: "Global financial and cultural capital"
          },
          san_francisco: {
            name: "San Francisco",
            description: "Technology and innovation hub"
          },
          miami: {
            name: "Miami",
            description: "Gateway to Latin America and business center"
          }
        },
        programs: {
          title: "US Immigration Programs",
          subtitle: "Choose the right pathway to the United States",
          e2: {
            name: "E2 Treaty Investor Visa",
            description: "Investor visa for nationals of treaty countries",
            requirements: [
              "Substantial investment in US business",
              "Treaty country nationality",
              "Control of investment funds",
              "Intent to depart when status ends"
            ],
            processing: "2-4 months"
          },
          eb5: {
            name: "EB-5 Immigrant Investor Program",
            description: "Permanent residence through investment",
            requirements: [
              "$800K-$1.05M investment",
              "Investment in approved project",
              "Job creation requirement",
              "Source of funds documentation"
            ],
            processing: "18-33 months"
          },
          student: {
            name: "Student Visa (F-1)",
            description: "Academic study visa for universities and colleges",
            requirements: [
              "I-20 form from SEVP school",
              "SEVIS fee payment",
              "Financial support proof",
              "Academic qualifications"
            ],
            processing: "3-8 weeks"
          },
          visit: {
            name: "Visit Visa (B1/B2)",
            description: "Business and tourism visitor visa",
            requirements: [
              "Valid passport",
              "Purpose of visit",
              "Financial evidence",
              "Ties to home country"
            ],
            processing: "2-6 weeks"
          }
        },
        process: {
          title: "Our Process",
          subtitle: "Professional guidance for your US immigration journey",
          steps: [
            {
              title: "Initial Assessment",
              description: "Evaluate your options and eligibility for US programs"
            },
            {
              title: "Investment Planning",
              description: "Structure your investment and business plan"
            },
            {
              title: "Application Submission",
              description: "Prepare and submit complete visa application"
            },
            {
              title: "Settlement Support",
              description: "Assistance with relocation and integration"
            }
          ]
        },
        cta: {
          title: "Ready to Pursue the American Dream?",
          subtitle: "Our experienced US immigration attorneys and consultants are here to guide you through every step.",
          primary_btn: "Free Consultation",
          secondary_btn: "Investment Calculator"
        }
      },
      europe: {
        hero: {
          title: "Move to Germany & Europe",
          subtitle: "Discover opportunities in the heart of Europe with strong economy and excellent quality of life",
          cta: "Explore Opportunities"
        },
        why_choose: {
          title: "Why Choose Germany?",
          subtitle: "Germany offers exceptional opportunities for skilled professionals with its robust economy, excellent education system, and high standard of living.",
          benefits: [
            "Strong economy and job market",
            "High quality education system",
            "Excellent healthcare and social benefits",
            "Central location in Europe",
            "Rich cultural heritage and lifestyle",
            "Path to EU citizenship"
          ]
        },
        sectors: {
          title: "In-Demand Job Sectors",
          subtitle: "High-demand professions in the German job market",
          jobs: [
            { name: "Information Technology", demand: "Very High Demand", icon: "💻" },
            { name: "Engineering", demand: "High Demand", icon: "⚙️" },
            { name: "Healthcare", demand: "Very High Demand", icon: "🏥" },
            { name: "Finance", demand: "High Demand", icon: "💰" },
            { name: "Manufacturing", demand: "High Demand", icon: "🏭" },
            { name: "Research & Development", demand: "High Demand", icon: "🔬" }
          ]
        },
        cities: {
          title: "Major German Cities",
          subtitle: "Explore the best cities for living and working in Germany",
          berlin: {
            name: "Berlin",
            description: "Capital city with thriving startup ecosystem"
          },
          munich: {
            name: "Munich",
            description: "Economic powerhouse and technology hub"
          },
          frankfurt: {
            name: "Frankfurt",
            description: "Financial center of Germany and Europe"
          }
        },
        programs: {
          title: "Germany Visa Programs",
          subtitle: "Find the right German visa for your goals",
          job_seeker: {
            name: "Germany Job Seeker Visa",
            description: "Visa to search for employment in Germany",
            requirements: [
              "University degree or vocational qualification",
              "Proof of financial support (€5,000+)",
              "Health insurance",
              "German language skills (A1-B2)",
              "Accommodation proof"
            ],
            processing: "2-4 weeks"
          },
          study: {
            name: "Germany Study Visa",
            description: "Student visa for higher education in Germany",
            requirements: [
              "University admission letter",
              "Financial proof (€11,208/year)",
              "Academic qualifications",
              "German/English proficiency",
              "Health insurance"
            ],
            processing: "4-8 weeks"
          },
          visit: {
            name: "Germany Visit Visa",
            description: "Schengen visa for tourism and business",
            requirements: [
              "Valid passport",
              "Travel insurance",
              "Financial proof",
              "Accommodation booking",
              "Return flight tickets"
            ],
            processing: "1-3 weeks"
          },
          spouse: {
            name: "Germany Spouse Visa",
            description: "Family reunification visa for spouses",
            requirements: [
              "Marriage certificate",
              "Sponsor financial proof",
              "German language certificate (A1)",
              "Accommodation proof",
              "Health insurance"
            ],
            processing: "4-12 weeks"
          }
        },
        process: {
          title: "Our Process",
          subtitle: "Expert guidance for your German immigration journey",
          steps: [
            {
              title: "Qualification Assessment",
              description: "Evaluate your qualifications and language skills"
            },
            {
              title: "Document Preparation",
              description: "Prepare and authenticate all required documents"
            },
            {
              title: "Visa Application",
              description: "Submit complete application to German consulate"
            },
            {
              title: "Pre-departure Support",
              description: "Assistance with travel and settlement preparation"
            }
          ]
        },
        cta: {
          title: "Ready for Your European Adventure?",
          subtitle: "Start your journey to Germany and Europe with our expert immigration consultants.",
          primary_btn: "Free Assessment",
          secondary_btn: "Book Consultation"
        }
      },
      uk: {
        hero: {
          title: "Immigrate to United Kingdom",
          subtitle: "Discover opportunities in Great Britain with its rich heritage and outstanding education",
          cta: "Explore Opportunities"
        },
        why_choose: {
          title: "Why Choose the United Kingdom?",
          subtitle: "The United Kingdom offers exceptional opportunities for skilled professionals with its rich heritage in education and innovation.",
          benefits: [
            "World-class education with prestigious universities",
            "Strong and resilient economy",
            "Rich cultural heritage and history",
            "Outstanding career opportunities",
            "Comprehensive healthcare system (NHS)",
            "Path to British citizenship"
          ]
        },
        programs: {
          title: "UK Visa Programs",
          subtitle: "Find the right visa for your UK goals",
          skilled: {
            name: "Skilled Worker Visa",
            description: "Visa for skilled professionals with a job offer in the UK",
            requirements: [
              "Job offer from licensed sponsor",
              "Required skill level",
              "Minimum salary £25,600",
              "English language proficiency",
              "Visa fees and healthcare surcharge"
            ],
            processing: "3-8 weeks"
          },
          study: {
            name: "Student Visa",
            description: "Visa to study at a licensed educational institution in the UK",
            requirements: [
              "Acceptance letter from licensed institution",
              "Proof of financial capacity",
              "English language competency",
              "Additional health insurance",
              "TB test if required"
            ],
            processing: "3-6 weeks"
          },
          visit: {
            name: "Standard Visitor Visa",
            description: "Short-term visa for tourism and business",
            requirements: [
              "Valid passport",
              "Proof of financial support",
              "Clear travel plan",
              "Strong ties to home country",
              "Travel insurance"
            ],
            processing: "3-6 weeks"
          },
          family: {
            name: "Family Visa",
            description: "Visa for spouse/partner and family members",
            requirements: [
              "Genuine relationship with British citizen/resident",
              "Financial income requirement",
              "English language proficiency",
              "Criminal record checks",
              "TB medical test"
            ],
            processing: "8-24 weeks"
          }
        },
        process: {
          title: "Our Process",
          subtitle: "Professional guide to UK immigration",
          steps: [
            {
              title: "Eligibility Assessment",
              description: "Comprehensive evaluation of your qualifications and options"
            },
            {
              title: "Application Preparation",
              description: "Preparation of all required documents and forms"
            },
            {
              title: "Visa Submission",
              description: "Submit visa application and follow up"
            },
            {
              title: "Post-arrival Support",
              description: "Assistance with relocation and settlement"
            }
          ]
        },
        cta: {
          title: "Ready to Start Your British Journey?",
          subtitle: "Our certified immigration consultants are here to guide you through every step of the process.",
          primary_btn: "Free Assessment",
          secondary_btn: "Book Consultation"
        }
      },
      usa: {
        hero: {
          title: "Move to United States",
          subtitle: "Achieve the American Dream through investment, education, and family immigration programs",
          cta: "Start Your Journey"
        },
        why_choose: {
          title: "Why Choose the USA?",
          subtitle: "The United States offers unparalleled opportunities for business, education, and personal growth in the world's most dynamic economy.",
          benefits: [
            "World's largest economy with vast opportunities",
            "Leading universities and research institutions",
            "Diverse cultural landscape and experiences",
            "Innovation hub for technology and business",
            "Strong legal system and property rights",
            "Path to American citizenship"
          ]
        },
        investment: {
          title: "Investment Immigration Options",
          subtitle: "Secure your US residency through strategic investment",
          options: [
            {
              type: "EB-5 Regional Center",
              amount: "$800,000",
              description: "Investment in targeted employment areas through approved regional centers",
              jobs: "Creates 10 indirect jobs"
            },
            {
              type: "EB-5 Direct Investment",
              amount: "$1,050,000",
              description: "Direct investment in new commercial enterprise",
              jobs: "Creates 10 direct jobs"
            },
            {
              type: "E2 Investment",
              amount: "$100,000+",
              description: "Substantial investment in US business (non-immigrant)",
              jobs: "Proportional to investment"
            }
          ]
        },
        cities: {
          title: "Major US Cities",
          subtitle: "Explore the best American cities for business and living",
          new_york: {
            name: "New York City",
            description: "Global financial and cultural capital"
          },
          san_francisco: {
            name: "San Francisco",
            description: "Technology and innovation hub"
          },
          miami: {
            name: "Miami",
            description: "Gateway to Latin America and business center"
          }
        },
        programs: {
          title: "US Immigration Programs",
          subtitle: "Choose the right pathway to the United States",
          e2: {
            name: "E2 Treaty Investor Visa",
            description: "Investor visa for nationals of treaty countries",
            requirements: [
              "Substantial investment in US business",
              "Treaty country nationality",
              "Control of investment funds",
              "Intent to depart when status ends"
            ],
            processing: "2-4 months"
          },
          eb5: {
            name: "EB-5 Immigrant Investor Program",
            description: "Permanent residence through investment",
            requirements: [
              "$800K-$1.05M investment",
              "Investment in approved project",
              "Job creation requirement",
              "Source of funds documentation"
            ],
            processing: "18-33 months"
          },
          student: {
            name: "Student Visa (F-1)",
            description: "Academic study visa for universities and colleges",
            requirements: [
              "I-20 form from SEVP school",
              "SEVIS fee payment",
              "Financial support proof",
              "Academic qualifications"
            ],
            processing: "3-8 weeks"
          },
          visit: {
            name: "Visit Visa (B1/B2)",
            description: "Business and tourism visitor visa",
            requirements: [
              "Valid passport",
              "Purpose of visit",
              "Financial evidence",
              "Ties to home country"
            ],
            processing: "2-6 weeks"
          }
        },
        process: {
          title: "Our Process",
          subtitle: "Professional guidance for your US immigration journey",
          steps: [
            {
              title: "Initial Assessment",
              description: "Evaluate your options and eligibility for US programs"
            },
            {
              title: "Investment Planning",
              description: "Structure your investment and business plan"
            },
            {
              title: "Application Submission",
              description: "Prepare and submit complete visa application"
            },
            {
              title: "Settlement Support",
              description: "Assistance with relocation and integration"
            }
          ]
        },
        cta: {
          title: "Ready to Pursue the American Dream?",
          subtitle: "Our experienced US immigration attorneys and consultants are here to guide you through every step.",
          primary_btn: "Free Consultation",
          secondary_btn: "Investment Calculator"
        }
      },
      europe: {
        hero: {
          title: "Move to Germany & Europe",
          subtitle: "Discover opportunities in the heart of Europe with strong economy and excellent quality of life",
          cta: "Explore Opportunities"
        },
        why_choose: {
          title: "Why Choose Germany?",
          subtitle: "Germany offers exceptional opportunities for skilled professionals with its robust economy, excellent education system, and high standard of living.",
          benefits: [
            "Strong economy and job market",
            "High quality education system",
            "Excellent healthcare and social benefits",
            "Central location in Europe",
            "Rich cultural heritage and lifestyle",
            "Path to EU citizenship"
          ]
        },
        sectors: {
          title: "In-Demand Job Sectors",
          subtitle: "High-demand professions in the German job market",
          jobs: [
            { name: "Information Technology", demand: "Very High Demand", icon: "💻" },
            { name: "Engineering", demand: "High Demand", icon: "⚙️" },
            { name: "Healthcare", demand: "Very High Demand", icon: "🏥" },
            { name: "Finance", demand: "High Demand", icon: "💰" },
            { name: "Manufacturing", demand: "High Demand", icon: "🏭" },
            { name: "Research & Development", demand: "High Demand", icon: "🔬" }
          ]
        },
        cities: {
          title: "Major German Cities",
          subtitle: "Explore the best cities for living and working in Germany",
          berlin: {
            name: "Berlin",
            description: "Capital city with thriving startup ecosystem"
          },
          munich: {
            name: "Munich",
            description: "Economic powerhouse and technology hub"
          },
          frankfurt: {
            name: "Frankfurt",
            description: "Financial center of Germany and Europe"
          }
        },
        programs: {
          title: "Germany Visa Programs",
          subtitle: "Find the right German visa for your goals",
          job_seeker: {
            name: "Germany Job Seeker Visa",
            description: "Visa to search for employment in Germany",
            requirements: [
              "University degree or vocational qualification",
              "Proof of financial support (€5,000+)",
              "Health insurance",
              "German language skills (A1-B2)",
              "Accommodation proof"
            ],
            processing: "2-4 weeks"
          },
          study: {
            name: "Germany Study Visa",
            description: "Student visa for higher education in Germany",
            requirements: [
              "University admission letter",
              "Financial proof (€11,208/year)",
              "Academic qualifications",
              "German/English proficiency",
              "Health insurance"
            ],
            processing: "4-8 weeks"
          },
          visit: {
            name: "Germany Visit Visa",
            description: "Schengen visa for tourism and business",
            requirements: [
              "Valid passport",
              "Travel insurance",
              "Financial proof",
              "Accommodation booking",
              "Return flight tickets"
            ],
            processing: "1-3 weeks"
          },
          spouse: {
            name: "Germany Spouse Visa",
            description: "Family reunification visa for spouses",
            requirements: [
              "Marriage certificate",
              "Sponsor financial proof",
              "German language certificate (A1)",
              "Accommodation proof",
              "Health insurance"
            ],
            processing: "4-12 weeks"
          }
        },
        process: {
          title: "Our Process",
          subtitle: "Expert guidance for your German immigration journey",
          steps: [
            {
              title: "Qualification Assessment",
              description: "Evaluate your qualifications and language skills"
            },
            {
              title: "Document Preparation",
              description: "Prepare and authenticate all required documents"
            },
            {
              title: "Visa Application",
              description: "Submit complete application to German consulate"
            },
            {
              title: "Pre-departure Support",
              description: "Assistance with travel and settlement preparation"
            }
          ]
        },
        cta: {
          title: "Ready for Your European Adventure?",
          subtitle: "Start your journey to Germany and Europe with our expert immigration consultants.",
          primary_btn: "Free Assessment",
          secondary_btn: "Book Consultation"
        }
      },
      common: {
        key_requirements: "Key Requirements:",
        learn_more: "Learn More",
        processing_time: "Processing Time"
      }
    }
  },
  ar: {
    common: {
      "navigation": {
        "home": "الرئيسية",
        "about": "من نحن",
        "about_us": "من نحن",
        "blog": "المدونة",
        "services": "الخدمات",
        "contact": "اتصل بنا",
        "pay_online": "دفع أونلاين"
      },
      "company": {
        "name": "الشوامخ للهجرة والتأشيرات",
        "description": "منذ عام 2016، نحن خبراء في خدمات الهجرة. نخدم في دول الخليج مع استشاريين معتمدين وموثوقين في الهجرة.",
        "credentials": "شركاء مسجلون في ICCRC",
        "location": "الشوامخ، المملكة العربية السعودية",
        "phone": "+966501367513",
        "email": "info@shawmekimmigration.com"
      },
      "countries": {
        "canada": "كندا",
        "australia": "أستراليا",
        "uk": "المملكة المتحدة",
        "europe": "أوروبا",
        "usa": "الولايات المتحدة",
        "germany": "ألمانيا"
      },
      "visa_types": {
        "visit_visas": "فيزا الزيارة",
        "immigration_visas": "فيزا الهجرة",
        "work_permits": "تصاريح العمل",
        "study_visas": "فيزا الدراسة",
        "spouse_visa": "فيزا الزوج/الزوجة",
        "family_visa": "فيزا العائلة"
      },
      "services": {
        "express_entry": "فيزا الدخول السريع",
        "provincial_nomination": "برنامج الترشيح الإقليمي",
        "atlantic_pilot": "برنامج الهجرة الأطلسي",
        "skilled_nominated": "فيزا المهارات المرشحة",
        "sole_representative": "برنامج الممثل الوحيد",
        "job_seeker": "فيزا الباحث عن عمل",
        "e2_treaty": "فيزا المستثمر E2",
        "eb5_investor": "فيزا المستثمر EB-5",
        "student_visa": "فيزا الطالب",
        "visit_visa": "فيزا الزيارة"
      },
      "footer": {
        "useful_links": "روابط مفيدة",
        "countries_visas": "فيزا الدول",
        "get_in_touch": "تواصل معنا",
        "privacy_policy": "سياسة الخصوصية",
        "terms_of_service": "شروط الخدمة",
        "disclaimer": "إخلاء المسؤولية",
        "cookie_policy": "سياسة ملفات تعريف الارتباط",
        "refund_policy": "سياسة الاسترداد",
        "copyright": "حقوق الطبع والنشر ©2016-2024. جميع الحقوق محفوظة لـ الشوامخ للهجرة والتأشيرات."
      },
      "common": {
        "more_services": "خدمات أخرى"
      },
      "payment": {
        "title": "دفع أونلاين",
        "subtitle": "معالجة دفع آمنة عبر مُيسر",
        "back_to_home": "العودة للرئيسية",
        "payment_information": "معلومات الدفع",
        "personal_information": "المعلومات الشخصية",
        "service_details": "تفاصيل الخدمة",
        "billing_address": "عنوان الفواتير",
        "payment_summary": "ملخص الدفع",
        "payment_security": "أمان الدفع",
        "need_help": "تحتاج مساعدة؟",
        "accepted_payment_methods": "طرق الدفع المقبولة",
        "form": {
          "full_name": "الاسم الكامل",
          "email_address": "عنوان البريد الإلكتروني",
          "phone_number": "رقم الهاتف",
          "amount": "المبلغ (ريال سعودي)",
          "service_type": "نوع الخدمة",
          "additional_details": "تفاصيل إضافية",
          "address": "العنوان",
          "city": "المدينة",
          "select_service": "اختر نوع الخدمة",
          "placeholder_name": "أدخل اسمك الكامل",
          "placeholder_email": "your.email@example.com",
          "placeholder_phone": "+966 50 123 4567",
          "placeholder_amount": "0.00",
          "placeholder_address": "أدخل عنوانك",
          "placeholder_city": "أدخل مدينتك",
          "placeholder_details": "أي معلومات إضافية حول طلب الخدمة..."
        },
        "services": {
          "express_entry": "فيزا الدخول السريع",
          "pnp": "برنامج الترشيح الإقليمي",
          "study_visa": "فيزا الدراسة",
          "visit_visa": "فيزا الزيارة",
          "work_permit": "تصريح العمل",
          "family_visa": "فيزا العائلة/الزوج",
          "business_visa": "فيزا الأعمال",
          "consultation": "خدمات الاستشارة",
          "document_translation": "ترجمة المستندات",
          "other": "خدمات أخرى"
        },
        "summary": {
          "service": "الخدمة:",
          "amount": "المبلغ:",
          "total": "المجموع:",
          "not_selected": "غير محدد"
        },
        "security": {
          "powered_by": "مدعوم من مُيسر - بوابة الدفع الموثوقة في السعودية",
          "pci_compliant": "متوافق مع معايير PCI DSS المستوى الأول",
          "ssl_encryption": "تشفير SSL 256-بت",
          "payment_methods": "يدعم جميع طرق الدفع الرئيسية"
        },
        "contact": {
          "support_available": "فريق الدعم متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في عملية الدفع."
        },
        "payment_methods": {
          "visa": "فيزا",
          "mastercard": "ماستركارد",
          "mada": "مدى",
          "apple_pay": "أبل باي",
          "stc_pay": "STC Pay",
          "bank_transfer": "تحويل بنكي",
          "secure_processing": "جميع طرق الدفع تتم معالجتها بأمان عبر مُيسر"
        },
        "buttons": {
          "submit": "المتابعة إلى دفع مُيسر",
          "processing": "تحضير الدفع..."
        },
        "errors": {
          "payment_error": "خطأ في الدفع",
          "required_fields": "يرجى ملء جميع الحقول المطلوبة",
          "invalid_amount": "يرجى إدخال مبلغ صحيح أكبر من 0",
          "invalid_email": "يرجى إدخال عنوان بريد إلكتروني صحيح",
          "payment_failed": "فشل في الدفع:",
          "connection_error": "فشل في الاتصال بخدمة الدفع",
          "unexpected_error": "حدث خطأ غير متوقع"
        },
        "notices": {
          "secure_payment": "دفع آمن عبر مُيسر",
          "redirect_notice": "بعد إرسال هذا النموذج، سيتم توجيهك إلى بوابة الدفع الآمنة لمُيسر لإكمال دفعتك بطريقة الدفع المفضلة لديك."
        }
      },
      "payment_callback": {
        "success_title": "تم الدفع بنجاح",
        "failed_title": "فشل في الدفع",
        "pending_title": "الدفع قيد المعالجة",
        "loading_title": "جاري التحقق من الدفع...",
        "processing_title": "جاري معالجة الدفع...",
        "success_message": "تم استلام دفعتك بنجاح. سنتواصل معك قريباً للمتابعة.",
        "failed_message": "فشل في معالجة الدفع. يرجى المحاولة مرة أخرى أو التواصل مع الدعم الفني.",
        "pending_message": "دفعتك قيد المعالجة. سنتواصل معك بمجرد تأكيد الدفع.",
        "loading_message": "جاري التحقق من حالة الدفع...",
        "payment_details": "تفاصيل الدفع",
        "payment_id": "رقم المعاملة",
        "amount": "المبلغ",
        "service": "الخدمة",
        "customer": "العميل",
        "date": "التاريخ",
        "download_receipt": "تحميل الفاتورة",
        "return_home": "العودة للرئيسية",
        "whats_next": "ما التالي؟",
        "try_again": "حاول مرة أخرى",
        "contact_support": "تواصل مع الدعم",
        "continue_home": "العودة للرئيسية",
        "support_message": "إذا كان لديك أي استفسارات، لا تتردد في التواصل معنا",
        "next_steps": {
          "email_confirmation": "ستتلقى رسالة تأكيد عبر البريد الإلكتروني",
          "team_contact": "سيتواصل معك فريق العمل خلال 24 ساعة"
        }
      },
      "home": {
        "hero": {
          "title": "مرحباً، كيف يمكننا مساعدتك؟",
          "subtitle1": "نحن استشاريو هجرة موثوقون للتعامل مع قضية الهجرة الخاصة بك",
          "subtitle2": "انتقل إلى بلد أحلامك",
          "subtitle3": "تحدث مع أحد أفضل استشارينا اليوم",
          "contact_cta": "خبراء الهجرة سيتواصلون معك"
        },
        "form": {
          "title": "املأ نموذج التقييم المجاني",
          "full_name": "الاسم الكامل",
          "email": "عنوان البريد الإلكتروني",
          "phone": "رقم الهاتف",
          "select_country": "اختر بلد الوجهة",
          "select_visa": "اختر نوع التأشيرة",
          "message": "رسالة إضافية",
          "submit": "إرسال التقييم",
          "sending": "جاري الإرسال...",
          "success_title": "تم إرسال طلبك بنجاح!",
          "success_desc": "سيتواصل معك خبراء الهجرة لدينا في أقرب وقت ممكن.",
          "error_title": "خطأ في إرسال طلبك",
          "error_desc": "يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة على info@shawmekimmigration.com",
          "sending_title": "جاري إرسال طلبك...",
          "sending_desc": "يرجى الانتظار، لا تقم بتحديث الصفحة."
        },
        "visa_options": {
          "work": "تصريح عمل",
          "study": "فيزا دراسة",
          "visit": "فيزا زيارة",
          "immigration": "إقامة دائمة",
          "family": "فيزا عائلة/زوج"
        },
        "about": {
          "title": "من نحن",
          "subtitle": "منذ عام 2016 نحن خبراء في خدمات الهجرة",
          "desc1": "لدينا فريق خبراء لخلق قيمة كبيرة للهجرة. يمكن لمحترفي استشارة الهجرة المعتمدين والموثوقين لدينا مساعدتك في الحصول على قرار إيجابي في قضيتك.",
          "desc2": "الخدمات المقدمة من شركائنا المسجلين في ICCRC. نحن نقدم خدمات استشارية لفرص الهجرة في البلدان الأجنبية.",
          "desc3": "كل استشاري يتم تعيينه في شركتنا قد خضع لبرنامج تدريب داخلي مكثف لمدة 6 أشهر يتكون من ثماني دورات مختلفة.",
          "serving": "نخدم في دول الخليج منذ عام 2018",
          "stats": {
            "cases": "حالات ناجحة",
            "experience": "سنوات خبرة"
          }
        },
        "visa_categories": {
          "title": "فئات التأشيرات الشائعة",
          "subtitle": "نحن نقدم خدمات تأشيرة شاملة لجميع احتياجات الهجرة الخاصة بك",
          "visit_desc": "تأشيرات الزيارة السياحية والتجارية لجميع البلدان",
          "immigration_desc": "مسارات الإقامة الدائمة والحصول على الجنسية",
          "work_desc": "التأشيرات القائمة على العمل وتراخيص العمل",
          "study_desc": "تأشيرات الطلاب للجامعات في جميع أنحاء العالم"
        },
        "countries_section": {
          "title": "اختر بلدك",
          "subtitle": "نحن نقدم خدمات الهجرة في جميع أنحاء العالم وللجامعات عالمياً",
          "canada_desc": "الدخول السريع، الترشيح الإقليمي، تصاريح الدراسة والعمل",
          "australia_desc": "الهجرة المهارية، فيزا الدراسة، فيزا الشريك والعائلة",
          "uk_desc": "فيزا الطلاب، تصاريح العمل، فيزا الزيارة والأعمال",
          "europe_desc": "فيزا الباحث عن عمل الألمانية، فيزا الدراسة، البطاقة الزرقاء الأوروبية",
          "discover_more": "اكتشف المزيد"
        },
        "testimonials": {
          "title": "ماذا يقول عملاؤنا",
          "subtitle": "عملاؤنا الراضون",
          "join": "انضم إلى أكثر من 1000+ طالب مثلك"
        },
        "news": {
          "title": "أحدث الأخبار والموارد",
          "subtitle": "ابق على اطلاع بأحدث أخبار الهجرة والموارد المفيدة",
          "read_more": "اقرأ المزيد",
          "read_more_articles": "اقرأ المزيد من المقالات من الموارد والأخبار",
          "articles": {
            "canada_jobs": {
              "title": "أهم 9 وظائف مطلوبة في كندا",
              "excerpt": "اكتشف المهن الأكثر طلباً في كندا للهجرة من خلال برنامج الدخول السريع وبرامج الترشيح الإقليمية."
            },
            "saskatchewan": {
              "title": "طرق الهجرة إلى ساسكاتشوان",
              "excerpt": "دليل شامل لبرنامج الترشيح الإقليمي لساسكاتشوان ومسارات الهجرة المتاحة."
            },
            "australia_skilled": {
              "title": "تحديثات الهجرة المهارية لأستراليا 2024",
              "excerpt": "أحدث التغييرات في سياسات الهجرة الأسترالية والفرص الجديدة للعمال المهرة."
            }
          }
        },
        "testimonials_data": {
          "amanda": {
            "name": "أماندا ريفيرا",
            "country": "ألمانيا",
            "visa": "فيزا تصريح العمل",
            "feedback": "ساعدوني طوال عملية الحصول على فيزا تصريح العمل. خدمة مهنية وتوجيه ممتاز."
          },
          "muhammad": {
            "name": "محمد أحمد",
            "country": "أستراليا",
            "visa": "فيزا الزوج",
            "feedback": "قدموا لي إرشادات كاملة حول فيزا الزوج. جعلوا العملية المعقدة بسيطة جداً."
          },
          "henry": {
            "name": "هنري مورجان",
            "country": "كندا",
            "visa": "فيزا الدراسة",
            "feedback": "استشارة ممتازة للطلاب. ساعدوني في تحقيق حلم الدراسة في الخارج في كندا."
          }
        }
      }
    },
    pages: {
      canada: {
        hero: {
          title: "الهجرة إلى كندا",
          subtitle: "طريقك إلى الإقامة الدائمة في إحدى أكثر دول العالم ترحيباً",
          cta: "ابدأ التقييم الخاص بك"
        },
        why_choose: {
          title: "لماذا تختار كندا؟",
          subtitle: "تقدم كندا بعض من أفضل برامج الهجرة في العالم مع مسارات متعددة للإقامة الدائمة والجنسية.",
          benefits: [
            "جودة حياة عالية ونظام رعاية صحية ممتاز",
            "نظام تعليمي ممتاز",
            "مجتمع متعدد الثقافات ومتسامح",
            "اقتصاد قوي مع فرص عمل متنوعة",
            "طريق للحصول على الجنسية الكندية",
            "المزايا الاجتماعية والأمان"
          ]
        },
        programs: {
          title: "برامج الهجرة الكندية",
          subtitle: "اختر المسار المناسب لرحلة الهجرة الكندية الخاصة بك",
          express_entry: {
            name: "نظام الدخول السريع",
            description: "برامج العمال المهرة الفيدرالية، وفئة الخبرة الكندية، والحرف المهرة الفيدرالية",
            requirements: [
              "درجة البكالوريوس أو ما يعادلها",
              "آيلتس 6.0+ إجمالي",
              "خبرة عمل مهرة سنة واحدة على الأقل",
              "العمر 18-35 مفضل"
            ],
            processing: "6-8 أشهر"
          },
          pnp: {
            name: "برنامج الترشيح الإقليمي (PNP)",
            description: "برامج الهجرة الخاصة بالمقاطعات للعمال المهرة",
            requirements: [
              "مهارات تتماشى مع احتياجات المقاطعة",
              "خبرة عمل في المهنة المستهدفة",
              "إتقان اللغة",
              "نية العيش في المقاطعة المرشحة"
            ],
            processing: "8-12 شهراً"
          },
          atlantic: {
            name: "برنامج الهجرة الأطلسي التجريبي",
            description: "برنامج الهجرة لمقاطعات الأطلسي",
            requirements: [
              "عرض عمل من صاحب عمل أطلسي",
              "خبرة عمل",
              "أوراق اعتماد تعليمية",
              "قدرات لغوية"
            ],
            processing: "6-9 أشهر"
          },
          study: {
            name: "فيزا الدراسة",
            description: "تصاريح دراسة للطلاب الدوليين",
            requirements: [
              "خطاب قبول من DLI",
              "إثبات الدعم المالي",
              "فحص السجل الجنائي النظيف",
              "فحص طبي إذا لزم الأمر"
            ],
            processing: "4-12 أسبوع"
          },
          visit: {
            name: "فيزا الزيارة",
            description: "فيزا الإقامة المؤقتة للسياحة والأعمال",
            requirements: [
              "جواز سفر صالح",
              "إثبات الدعم المالي",
              "روابط مع البلد الأصلي",
              "غرض الزيارة"
            ],
            processing: "2-4 أسابيع"
          },
          family: {
            name: "فيزا الأسرة/الزوج",
            description: "لم الشمل العائلي وكفالة الزوج",
            requirements: [
              "كفيل مؤهل في كندا",
              "إثبات العلاقة",
              "تحقيق المتطلبات المالية",
              "فحوصات طبية وسجل جنائي"
            ],
            processing: "12-24 شهراً"
          }
        },
        process: {
          title: "عمليتنا",
          subtitle: "إرشاد خطوة بخطوة للهجرة الكندية الخاصة بك",
          steps: [
            {
              title: "التقييم الأولي",
              description: "تقييم أهليتك وتوصية أفضل برنامج"
            },
            {
              title: "تحضير المستندات",
              description: "المساعدة في جمع وتحضير جميع المستندات المطلوبة"
            },
            {
              title: "تقديم الطلب",
              description: "تقديم طلبك الكامل للهجرة الكندية"
            },
            {
              title: "المتابعة والدعم",
              description: "مراقبة طلبك وتوفير الدعم المستمر"
            }
          ]
        },
        cta: {
          title: "مستعد لبدء رحلتك الكندية؟",
          subtitle: "مستشارونا المعتمدون للهجرة هنا لإرشادك خلال كل خطوة من العملية.",
          primary_btn: "تقييم مجاني",
          secondary_btn: "حجز استشارة"
        }
      },
      australia: {
        hero: {
          title: "الهجرة إلى أستراليا",
          subtitle: "اكتشف الفرص في أرض أسفل العالم مع إرشادنا المتخصص",
          cta: "ابدأ رحلتك"
        },
        why_choose: {
          title: "لماذا تختار أستراليا؟",
          subtitle: "تقدم أستراليا فرصاً ممتازة للمهاجرين المهرة مع اقتصادها القوي وجودة الحياة العالية وسياسات الهجرة المرحبة.",
          benefits: [
            "مستوى معيشة عالي وتوازن في الحياة العملية",
            "أنظمة تعليمية ورعاية صحية عالمية المستوى",
            "مجتمع متنوع ومتعدد الثقافات",
            "اقتصاد قوي مع فرص عمل ممتازة",
            "مناخ جميل وبيئة طبيعية",
            "طريق للحصول على الجنسية الأسترالية"
          ]
        },
        cities: {
          title: "المدن الأسترالية الشهيرة",
          subtitle: "استكشف أفضل المدن للعيش والعمل في أستراليا",
          sydney: {
            name: "سيدني",
            description: "مركز اقتصادي مع ميناء أيقوني وشواطئ"
          },
          melbourne: {
            name: "ملبورن",
            description: "العاصمة الثقافية المعروفة بالفنون وثقافة القهوة"
          },
          brisbane: {
            name: "بريسبان",
            description: "مناخ مشمس وقطاع تكنولوجيا متنامي"
          }
        },
        programs: {
          title: "برامج الهجرة الأسترالية",
          subtitle: "اعثر على مسار الفيزا المناسب لحلمك الأسترالي",
          skilled: {
            name: "تأشيرة العمالة الماهرة المُرشّحة (الفئة 190)",
            description: "الهجرة المهرة المرشحة من قبل الولاية أو الإقليم",
            requirements: [
              "مهنة مهرة في القائمة ذات الصلة",
              "تقييم المهارات",
              "إتقان اللغة الإنجليزية",
              "العمر تحت 45",
              "ترشيح الولاية"
            ],
            processing: "8-11 شهراً"
          },
          study: {
            name: " الدراسة (الفئة الفرعية 500)",
            description: "فيزا الطلاب للتعليم الدولي",
            requirements: [
              "تأكيد التسجيل (CoE)",
              "متطلب الدخول المؤقت الحقيقي",
              "القدرة المالية",
              "إتقان اللغة الإنجليزية",
              "التأمين الصحي"
            ],
            processing: "4-6 أسابيع"
          },
          visit: {
            name: "فيزا الزيارة (الفئة الفرعية 600)",
            description: "فيزا الزائر للسياحة والأعمال",
            requirements: [
              "جواز سفر صالح",
              "دليل مالي",
              "متطلبات صحية",
              "متطلبات الشخصية",
              "نية الزائر الحقيقية"
            ],
            processing: "2-4 أسابيع"
          },
          spouse: {
            name: "فيزا الزوج (الفئة الفرعية 820/801)",
            description: "فيزا الشراكة للمتزوجين أو الشركاء الفعليين",
            requirements: [
              "كفيل مواطن أسترالي/مقيم دائم",
              "دليل العلاقة الحقيقية",
              "فحوصات صحية وشخصية",
              "متطلبات مالية"
            ],
            processing: "12-24 شهراً"
          }
        },
        process: {
          title: "عمليتنا",
          subtitle: "دليلك خطوة بخطوة للهجرة الأسترالية",
          steps: [
            {
              title: "تقييم المهارات",
              description: "تقييم مؤهلاتك وتحديد الأهلية"
            },
            {
              title: "إبداء الاهتمام",
              description: "تقديم EOI عبر نظام SkillSelect"
            },
            {
              title: "دعوة للتقديم",
              description: "تلقي الدعوة وتقديم طلب الفيزا"
            },
            {
              title: "موافقة الفيزا",
              description: "إكمال المعالجة وتلقي فيزتك"
            }
          ]
        },
        cta: {
          title: "مستعد لبدء رحلتك الأسترالية؟",
          subtitle: "مستشارونا المعتمدون للهجرة هنا لإرشادك خلال كل خطوة من العملية.",
          primary_btn: "تقييم مجاني",
          secondary_btn: "حجز استشارة"
        }
      },
      usa: {
        hero: {
          title: "الهجرة إلى الولايات المتحدة",
          subtitle: "حقق الحلم الأمريكي من خلال برامج الاستثمار والتعليم والهجرة العائلية",
          cta: "ابدأ رحلتك"
        },
        why_choose: {
          title: "لماذا تختار الولايات المتحدة؟",
          subtitle: "تقدم الولايات المتحدة فرصاً لا مثيل لها للأعمال والتعليم والنمو الشخصي في أقوى اقتصاد في العالم.",
          benefits: [
            "أكبر اقتصاد في العالم مع فرص هائلة",
            "جامعات ومؤسسات بحثية رائدة",
            "تنوع ثقافي وتجارب متنوعة",
            "مركز الابتكار للتكنولوجيا والأعمال",
            "نظام قانوني قوي وحقوق ملكية",
            "طريق للحصول على الجنسية الأمريكية"
          ]
        },
        investment: {
          title: "خيارات هجرة الاستثمار",
          subtitle: "أمّن إقامتك الأمريكية من خلال الاستثمار الاستراتيجي",
          options: [
            {
              type: "مركز إقليمي EB-5",
              amount: "$800,000",
              description: "استثمار في مناطق التوظيف المستهدفة من خلال مراكز إقليمية معتمدة",
              jobs: "ينشئ 10 وظائف غير مباشرة"
            },
            {
              type: "استثمار مباشر EB-5",
              amount: "$1,050,000",
              description: "استثمار مباشر في مشروع تجاري جديد",
              jobs: "ينشئ 10 وظائف مباشرة"
            },
            {
              type: "استثمار E2",
              amount: "$100,000+",
              description: "استثمار كبير في أعمال أمريكية (غير مهاجر)",
              jobs: "متناسب مع الاستثمار"
            }
          ]
        },
        cities: {
          title: "المدن الأمريكية الرئيسية",
          subtitle: "استكشف أفضل المدن الأمريكية للأعمال والمعيشة",
          new_york: {
            name: "نيويورك",
            description: "العاصمة المالية والثقافية العالمية"
          },
          san_francisco: {
            name: "سان فرانسيسكو",
            description: "مركز التكنولوجيا والابتكار"
          },
          miami: {
            name: "ميامي",
            description: "بوابة أمريكا اللاتينية ومركز أعمال"
          }
        },
        programs: {
          title: "برامج الهجرة الأمريكية",
          subtitle: "اختر المسار الصحيح للولايات المتحدة",
          e2: {
            name: "تأشيرة المستثمر المعاهدة E2",
            description: "تأشيرة مستثمر لمواطني دول المعاهدة",
            requirements: [
              "استثمار كبير في أعمال أمريكية",
              "جنسية دولة معاهدة",
              "السيطرة على أموال الاستثمار",
              "نية المغادرة عند انتهاء الوضع"
            ],
            processing: "2-4 أشهر"
          },
          eb5: {
            name: "برنامج المستثمر المهاجر EB-5",
            description: "الإقامة الدائمة من خلال الاستثمار",
            requirements: [
              "استثمار $800K-$1.05M",
              "استثمار في مشروع معتمد",
              "متطلب إنشاء الوظائف",
              "توثيق مصدر الأموال"
            ],
            processing: "18-33 شهراً"
          },
          student: {
            name: "تأشيرة الطالب (F-1)",
            description: "تأشيرة دراسة أكاديمية للجامعات والكليات",
            requirements: [
              "نموذج I-20 من مدرسة SEVP",
              "دفع رسوم SEVIS",
              "إثبات الدعم المالي",
              "مؤهلات أكاديمية"
            ],
            processing: "3-8 أسابيع"
          },
          visit: {
            name: "تأشيرة الزيارة (B1/B2)",
            description: "تأشيرة زائر للأعمال والسياحة",
            requirements: [
              "جواز سفر صالح",
              "غرض الزيارة",
              "دليل مالي",
              "روابط مع البلد الأصلي"
            ],
            processing: "2-6 أسابيع"
          }
        },
        process: {
          title: "عمليتنا",
          subtitle: "إرشاد مهني لرحلة الهجرة الأمريكية",
          steps: [
            {
              title: "التقييم الأولي",
              description: "تقييم خياراتك وأهليتك للبرامج الأمريكية"
            },
            {
              title: "تخطيط الاستثمار",
              description: "هيكلة استثمارك وخطة الأعمال"
            },
            {
              title: "تقديم الطلب",
              description: "إعداد وتقديم طلب التأشيرة الكامل"
            },
            {
              title: "دعم التسوية",
              description: "مساعدة في الانتقال والاندماج"
            }
          ]
        },
        cta: {
          title: "مستعد لتحقيق الحلم الأمريكي؟",
          subtitle: "محامو ومستشاري الهجرة الأمريكية ذوو الخبرة هنا لإرشادك خلال كل خطوة.",
          primary_btn: "استشارة مجانية",
          secondary_btn: "حاسبة الاستثمار"
        }
      },
      europe: {
        hero: {
          title: "الهجرة إلى ألمانيا وأوروبا",
          subtitle: "اكتشف الفرص في قلب أوروبا مع اقتصاد قوي وجودة حياة ممتازة",
          cta: "استكشف الفرص"
        },
        why_choose: {
          title: "لماذا تختار ألمانيا؟",
          subtitle: "تقدم ألمانيا فرصاً استثنائية للمهنيين المهرة مع اقتصادها القوي ونظامها التعليمي الممتاز ومستوى المعيشة العالي.",
          benefits: [
            "اقتصاد قوي وسوق عمل نشط",
            "نظام تعليمي عالي الجودة",
            "رعاية صحية ومزايا اجتماعية ممتازة",
            "موقع مركزي في أوروبا",
            "تراث ثقافي غني ونمط حياة متميز",
            "طريق للحصول على الجنسية الأوروبية"
          ]
        },
        sectors: {
          title: "القطاعات المطلوبة",
          subtitle: "المهن عالية الطلب في السوق الألمانية",
          jobs: [
            { name: "تقنية المعلومات", demand: "طلب عالي جداً", icon: "💻" },
            { name: "الهندسة", demand: "طلب عالي", icon: "⚙️" },
            { name: "الرعاية الصحية", demand: "طلب عالي جداً", icon: "🏥" },
            { name: "الشؤون المالية", demand: "طلب عالي", icon: "💰" },
            { name: "التصنيع", demand: "طلب عالي", icon: "🏭" },
            { name: "البحث والتطوير", demand: "طلب عالي", icon: "🔬" }
          ]
        },
        cities: {
          title: "المدن الألمانية الرئيسية",
          subtitle: "استكشف أفضل المدن للمعيشة والعمل في ألمانيا",
          berlin: {
            name: "برلين",
            description: "العاصمة مع نظام بيئي مزدهر للشركات الناشئة"
          },
          munich: {
            name: "ميونخ",
            description: "قوة اقتصادية ومركز تكنولوجي"
          },
          frankfurt: {
            name: "فرانكفورت",
            description: "المركز المالي لألمانيا وأوروبا"
          }
        },
        programs: {
          title: "برامج التأشيرات الألمانية",
          subtitle: "اعثر على التأشيرة الألمانية المناسبة لأهدافك",
          job_seeker: {
            name: "تأشيرة البحث عن عمل",
            description: "تأشيرة للبحث عن عمل في ألمانيا",
            requirements: [
              "شهادة جامعية أو مؤهل مهني",
              "إثبات الدعم المالي (5000€+)",
              "تأمين صحي",
              "مهارات اللغة الألمانية (A1-B2)",
              "إثبات السكن"
            ],
            processing: "2-4 أسابيع"
          },
          study: {
            name: "تأشيرة الدراسة",
            description: "تأشيرة طالب للتعليم العالي في ألمانيا",
            requirements: [
              "خطاب قبول جامعي",
              "إثبات مالي (11,208€/سنة)",
              "مؤهلات أكاديمية",
              "إتقان الألمانية/الإنجليزية",
              "تأمين صحي"
            ],
            processing: "4-8 أسابيع"
          },
          visit: {
            name: "تأشيرة الزيارة",
            description: "تأشيرة شنغن للسياحة والأعمال",
            requirements: [
              "جواز سفر صالح",
              "تأمين السفر",
              "إثبات مالي",
              "حجز الإقامة",
              "تذاكر الطيران العائدة"
            ],
            processing: "1-3 أسابيع"
          },
          spouse: {
            name: "تأشيرة الزوج",
            description: "تأشيرة لم الشمل العائلي للأزواج",
            requirements: [
              "شهادة زواج",
              "إثبات مالي للكفيل",
              "شهادة اللغة الألمانية (A1)",
              "إثبات السكن",
              "تأمين صحي"
            ],
            processing: "4-12 أسبوع"
          }
        },
        process: {
          title: "عمليتنا",
          subtitle: "إرشاد خبير لرحلة الهجرة الألمانية",
          steps: [
            {
              title: "تقييم المؤهلات",
              description: "تقييم مؤهلاتك ومهاراتك اللغوية"
            },
            {
              title: "تحضير المستندات",
              description: "إعداد وتوثيق جميع المستندات المطلوبة"
            },
            {
              title: "طلب التأشيرة",
              description: "تقديم طلب كامل للقنصلية الألمانية"
            },
            {
              title: "دعم ما قبل المغادرة",
              description: "مساعدة في السفر وإعداد التسوية"
            }
          ]
        },
        cta: {
          title: "مستعد لمغامرتك الأوروبية؟",
          subtitle: "ابدأ رحلتك إلى ألمانيا وأوروبا مع مستشاري الهجرة الخبراء لدينا.",
          primary_btn: "تقييم مجاني",
          secondary_btn: "حجز استشارة"
        }
      },
      uk: {
        hero: {
          title: "الهجرة إلى المملكة المتحدة",
          subtitle: "اكتشف الفرص في بريطانيا العظمى مع تاريخها العريق وتعليمها المتميز",
          cta: "استكشف الفرص"
        },
        why_choose: {
          title: "لماذا تختار المملكة المتحدة؟",
          subtitle: "تقدم المملكة المتحدة فرصاً استثنائية للمهنيين المهرة مع تاريخها العريق في التعليم والابتكار.",
          benefits: [
            "تعليم عالمي المستوى مع جامعات مرموقة",
            "اقتصاد قوي ومرن",
            "تراث ثقافي غني وتاريخ عريق",
            "فرص وظيفية متميزة",
            "نظام رعاية صحية شامل (NHS)",
            "طريق للحصول على الجنسية البريطانية"
          ]
        },
        programs: {
          title: "برامج التأشيرات البريطانية",
          subtitle: "اعثر على التأشيرة المناسبة لأهدافك في المملكة المتحدة",
          skilled: {
            name: "تأشيرة العامل الماهر",
            description: "تأشيرة للمهنيين المهرة الذين لديهم عرض عمل في المملكة المتحدة",
            requirements: [
              "عرض عمل من راعٍ مرخص",
              "مستوى مهارة مطلوب",
              "راتب أدنى £25,600",
              "إتقان اللغة الإنجليزية",
              "رسوم التأشيرة ومساهمة الرعاية الصحية"
            ],
            processing: "3-8 أسابيع"
          },
          study: {
            name: "تأشيرة الطالب",
            description: "تأشيرة للدراسة في مؤسسة تعليمية مرخصة في المملكة المتحدة",
            requirements: [
              "خطاب قبول من مؤسسة مرخصة",
              "إثبات القدرة المالية",
              "كفاءة اللغة الإنجليزية",
              "تأمين صحي إضافي",
              "فحص السل إذا لزم الأمر"
            ],
            processing: "3-6 أسابيع"
          },
          visit: {
            name: "تأشيرة الزيارة القياسية",
            description: "تأشيرة قصيرة المدى للسياحة والأعمال",
            requirements: [
              "جواز سفر صالح",
              "إثبات الدعم المالي",
              "خطة سفر واضحة",
              "روابط قوية مع بلد الإقامة",
              "تأمين سفر"
            ],
            processing: "3-6 أسابيع"
          },
          family: {
            name: "تأشيرة الأسرة",
            description: "تأشيرة للزوج/الشريك وأفراد العائلة",
            requirements: [
              "علاقة حقيقية مع مواطن بريطاني/مقيم",
              "متطلب الدخل المالي",
              "إتقان اللغة الإنجليزية",
              "فحوصات السجل الجنائي",
              "فحص طبي للسل"
            ],
            processing: "8-24 أسبوع"
          }
        },
        process: {
          title: "عمليتنا",
          subtitle: "دليلك المهني للهجرة إلى المملكة المتحدة",
          steps: [
            {
              title: "تقييم الأهلية",
              description: "تقييم شامل لمؤهلاتك وخياراتك"
            },
            {
              title: "تحضير الطلب",
              description: "إعداد جميع المستندات والنماذج المطلوبة"
            },
            {
              title: "تقديم التأشيرة",
              description: "تقديم طلب التأشيرة والمتابعة"
            },
            {
              title: "دعم ما بعد الوصول",
              description: "مساعدة في الانتقال والاستقرار"
            }
          ]
        },
        cta: {
          title: "مستعد لبدء رحلتك البريطانية؟",
          subtitle: "مستشارونا المعتمدون للهجرة هنا لإرشادك خلال كل خطوة من العملية.",
          primary_btn: "تقييم مجاني",
          secondary_btn: "حجز استشارة"
        }
      },
      common: {
        key_requirements: "المتطلبات الأساسية:",
        learn_more: "اعرف المزيد",
        processing_time: "وقت المعالجة"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    
    // Language detection disabled - using useLanguage hook instead

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n; 