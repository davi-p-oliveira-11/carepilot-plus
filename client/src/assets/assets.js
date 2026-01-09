import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Michael Thompson',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Thompson focuses on comprehensive primary care, emphasizing preventive health, accurate diagnosis, and long-term patient well-being through personalized treatment plans.',
    fees: 50,
    address: {
      line1: '245 W 72nd Street',
      line2: 'New York, NY 10023'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Carter',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Carter specializes in women’s health, offering compassionate care in gynecology with a strong focus on preventive screenings and patient education.',
    fees: 60,
    address: {
      line1: '310 Market Street',
      line2: 'San Francisco, CA 94105'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Sarah Nguyen',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Nguyen provides modern dermatological care, treating skin conditions with evidence-based approaches and a focus on skin health and confidence.',
    fees: 30,
    address: {
      line1: '1200 Wilshire Blvd',
      line2: 'Los Angeles, CA 90017'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Daniel Brooks',
    image: doc4,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Brooks is dedicated to pediatric care, supporting children’s health and development through attentive, family-centered medical practice.',
    fees: 40,
    address: {
      line1: '455 Peachtree Street NE',
      line2: 'Atlanta, GA 30308'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Laura Hernandez',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Hernandez specializes in neurological disorders, providing careful diagnosis and management plans to improve patients’ quality of life.',
    fees: 50,
    address: {
      line1: '890 N Michigan Ave',
      line2: 'Chicago, IL 60611'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Collins',
    image: doc6,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Collins focuses on treating complex neurological conditions using a patient-first approach and up-to-date clinical practices.',
    fees: 50,
    address: {
      line1: '210 Congress Ave',
      line2: 'Austin, TX 78701'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Robert Miller',
    image: doc7,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Miller delivers primary medical care with an emphasis on preventive health, early intervention, and building long-term patient relationships.',
    fees: 50,
    address: {
      line1: '600 Boylston Street',
      line2: 'Boston, MA 02116'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Natalie Johnson',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Johnson is committed to providing comprehensive gynecological care, supporting women through all stages of life with empathy and expertise.',
    fees: 60,
    address: {
      line1: '1500 Broadway',
      line2: 'New York, NY 10036'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr. Olivia Martinez',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Martinez offers dermatology services focused on skin health, acne treatment, and early detection of skin-related conditions.',
    fees: 30,
    address: {
      line1: '700 5th Avenue',
      line2: 'Seattle, WA 98104'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. Kevin Robinson',
    image: doc10,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Robinson provides pediatric care with a focus on preventive medicine, childhood development, and creating a comfortable environment for families.',
    fees: 40,
    address: {
      line1: '9800 Montgomery Blvd NE',
      line2: 'Albuquerque, NM 87111'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. Hannah Wilson',
    image: doc11,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Wilson works closely with patients to manage neurological conditions, prioritizing clear communication and personalized treatment strategies.',
    fees: 50,
    address: {
      line1: '401 Biscayne Blvd',
      line2: 'Miami, FL 33132'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. Steven Parker',
    image: doc12,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Parker brings extensive experience in neurology, helping patients navigate chronic conditions with evidence-based medical care.',
    fees: 50,
    address: {
      line1: '1600 Market Street',
      line2: 'Philadelphia, PA 19103'
    }
  },
  {
    _id: 'doc13',
    name: 'Dr. Rebecca Allen',
    image: doc13,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Allen focuses on holistic primary care, guiding patients through preventive strategies and effective treatment plans.',
    fees: 50,
    address: {
      line1: '500 Pine Street',
      line2: 'San Diego, CA 92101'
    }
  },
  {
    _id: 'doc14',
    name: 'Dr. Jason Martinez',
    image: doc14,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Martinez provides modern gynecological care, combining clinical expertise with a patient-centered approach.',
    fees: 60,
    address: {
      line1: '2001 Ross Avenue',
      line2: 'Dallas, TX 75201'
    }
  },
  {
    _id: 'doc15',
    name: 'Dr. Lauren Bennett',
    image: doc15,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Bennett is dedicated to helping patients maintain healthy skin through accurate diagnosis and personalized dermatological treatments.',
    fees: 30,
    address: {
      line1: '1000 Nicollet Mall',
      line2: 'Minneapolis, MN 55403'
    }
  }
];
