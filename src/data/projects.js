// Images stored in public/ are referenced from the site root.
// Example: add public/assets/images/nature-walk.jpg, then use
// image: '/assets/images/nature-walk.jpg'.
const placeholderImage = '/assets/images/dummy.avif';

// Replace these paths one by one as Past Projects event images arrive.
// Files added under public/assets/images/ are used as /assets/images/filename.ext.
const pastEventImages = [
  '/assets/images/banter_pp.webp', // Banter
  '/assets/images/nazariya_nm_pp.webp', // Nazariya with Nisargamitra
  '/assets/images/nazariya_city_pp.webp', // Nazariya in the City
  '/assets/images/qala_immersive_pp.webp', // Qala: Immersive Art Event
  '/assets/images/qala_art_pp.webp', // Qala: Art Festival
  '/assets/images/qala_picnic_pp.webp', // Qala: The Art Picnic
  '/assets/images/battigul_pp.webp', // Batti Gul
  '/assets/images/nurturing_nature_pp.webp', // Nurturing the Nurturer
  '/assets/images/cinemaGhar_pp_result.webp', // Cinema Ghar
  '/assets/images/musafir_pp_result.webp', // Musafir
  '/assets/images/insaanhu_pp_result.webp', // Main Toh Bas Ek Insaan Hu
  '/assets/images/puddle_story_pp.webp', // The Puddle Story
  '/assets/images/Book_club.png', // The Book Club

];

// Replace each path independently when the Album photographs are received.
const albumImages = [
  '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif',
  '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif',
  '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif',
  '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif',
  '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif',
  '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif', '/assets/images/dummy.avif',
];

export const projects = [
  {
    id: 'community',
    label: 'SnackTime Experiences',
    title: 'Community',
    description: 'Play. Explore. Create. Connect.',
    image: '/assets/images/community_hero.webp',
    layout: 'community',
    details: {
      story: 'They say it takes a village, and this is ours. Snack Time grew from a single shared moment into a vibrant, supportive community dedicated to giving children the gift of unhurried play. Together, we open up doors to outdoor adventures, creative workshops, and perspective-shaping experiences. It’s a shared journey where kids learn life skills naturally, and every family finds a warm seat at the table.',
      tagline: 'Play. Explore. Create. Connect.',
      instagramUrl: 'https://instagram.com/yourhandle',
      // Replace or add public image paths here; each slot renders in this order.
      featureImage: '/assets/images/community_dump1.webp',
      galleryImages: [
        '/assets/images/community_dump1.webp',
        '/assets/images/community_dump2.webp',
        '/assets/images/community_dump3.webp',
        '/assets/images/community_dump4.webp',
        '/assets/images/community_dump5.webp',
        '/assets/images/community_dump6.webp',
        '/assets/images/community_dump7.webp',
        '/assets/images/community_dump8.webp',
        '/assets/images/community_dump9.webp',
        '/assets/images/community_dump10.webp',
        '/assets/images/community_dump11.webp',
        '/assets/images/community_dump12.webp',
        '/assets/images/community_dump13.webp',
        '/assets/images/community_dump14.webp',
        '/assets/images/community_dump15.webp',
        '/assets/images/community_dump16.webp',
        '/assets/images/community_dump17.webp',
        '/assets/images/community_dump18.webp',
        '/assets/images/community_dump19.webp',
        '/assets/images/community_dump20.webp',


      ],
    },
  },
  {
    id: 'ehsaas',
    label: 'SnackTime Project',
    title: 'Ehsaas',
    description: 'A city wide social impact initiative by Snack Time',
    image: '/assets/images/ehsaas_hero.webp',
    layout: 'ehsaas',
    details: {
      subtitle: 'A City-Wide Movement for Conscious Giving & Lived Empathy',
      introduction: [
        'There are things sitting in our homes right now; a book we’ve already read, clothes tucked away in a drawer, toys sitting quietly on a shelf. Over time, they stop holding our attention, even though they still hold so much value.',
        'At Ehsaas, we start with a simple, gentle truth: what we have is not universal.',
        'For many children, access to these simple everyday items isn’t just occasionally limited; it’s a constant reality. Ehsaas was born to bridge this gap, not through pity or passive charity, but by creating moments where children experience the quiet beauty of sharing; not out of obligation, but out of understanding.',
        'Across Mumbai, we connect families, neighborhood cafes, schools, and local organizations to turn everyday city spaces into living touchpoints of reflection, connection, and human dignity.',
      ],
      metrics: [
        { value: '9', label: 'Kindness drop-off hubs', text: 'Bloomed across Mumbai, from Fort to Bandra and Kandivali.' },
        { value: '340+', label: 'Beloved items', text: 'Handpicked and shared by children and families, transforming donation into a meaningful personal connection.' },
        { value: '300', label: 'Care hampers', text: 'Lovingly packed and placed directly into the hands of children at Shahu Nagar Playground in Mahim.' },
        { value: '60+', label: 'Young hearts', text: 'Learned, danced, and experienced the beauty of kindness through interactive workshops.' },
      ],
      tagline: 'Reflect. Bridge. Give. Empower.',
      instagramUrl: 'https://www.instagram.com/ehsaasbysnacktime?igsh=cWFjOGo4ZnBydGZ0&utm_source=qr ',
      impactReportUrl: '/assets/documents/ehsaas-impact-report.pdf',
      featureImage: '/assets/images/ehsaas_hero.webp',
      // Replace these three paths with final photos from public/assets/images/.
      images: [
        '/assets/images/ehsaas_dump1.webp',
        '/assets/images/ehsaas_dump2.webp',
        '/assets/images/ehsaas_dump3.webp',
      ],
      // Add each actual logo to public/assets/images/partners/ and replace its path below.
      partners: [
        { name: 'Magari Cafe', logo: '/assets/logo/Magari_Ehsaas.png' },
        { name: 'Nandan Coffee', logo: '/assets/logo/Nandan_ehsaas.png' },
        { name: 'Anna Idli Restaurant', logo: '/assets/logo/Anna_Idli_Community.png' },
        { name: 'Oroma Cafe', logo: '/assets/logo/oroma_ehsaas.png' },
        { name: 'Hunar Sikho NGO', logo: '/assets/logo/Hunar_Sikho_Ehsaas.png' },
        { name: 'Nrityashree Kathak Academy', logo: '/assets/logo/Nrityashree_ehsaas.png' },
        { name: 'The Little House', logo: '/assets/logo/The_Little_House_Ehsaas.png' },
        { name: 'Genius Learning Centre', logo: '/assets/logo/Genius_learning_ehsaas.png' },
        { name: 'Skillmatics', logo: '/assets/logo/Skillmatics_ehsaas.png' },
        { name: 'Bombay To Barcelona', logo: '/assets/logo/B_to_B_Ehsaas.png' },
        { name: 'Street Angels Foundation', logo: '/assets/logo/Street_Angels_Ehsaas.png' },
        { name: 'Urban Platter', logo: '/assets/logo/Urban_platter_ehsaas.png' },
        { name: 'Brownie Cottage', logo: '/assets/logo/Browniecottageehsaas.png' },
        { name: 'Prerana Anti Human Trafficking', logo: '/assets/logo/Prerana_Ehsaas.png' },
        { name: 'Dot Line Space Art Foundation', logo: '/assets/logo/dummy.avif' },
      ],
    },
  },
  {
    id: 'futureHumanProject',
    label: 'SnackTime Project',
    title: 'The Future Human Project',
    description: 'India’s first subject-integrated SEL Curriculum',
    image: '/assets/images/future_human_hero.webp',
    layout: 'futureHuman',
    details: {
      openingTitle: 'What Does It Mean to Grow Up Whole?',
      opening: [
        'When schools prioritize marks over mindsets, children lose touch with who they are.',
        'For generations, education has been anchored in producing individuals who can calculate, memorize, and reproduce information faster than their peers. Today, a six-year-old entering Grade 1 will step into a mid-2030s workforce completely transformed by Artificial Intelligence. Information has been democratized—answers, complex mathematical proofs, and code are now available in seconds at the click of a button.',
        'When knowledge itself is no longer a scarce resource, the competitive advantage of memorization drops to zero. The true purpose of a premium education must evolve. Growing up whole means preparing children not just to pass exams, but to navigate an open-ended world with deep curiosity, ethical clarity, raw emotional resilience, cross-cultural empathy, and adaptive leadership.',
      ],
      selTitle: 'Moving Beyond the “Isolated SEL” Problem',
      sel: [
        'Traditional Social-Emotional Learning (SEL) often fails because it is treated as a secondary, non-graded “filler” period squeezed between core academic subjects. Squeezing an empathy lecture between intense science or math lessons causes a jarring mental switch, leaving students to perceive life skills as disconnected from their “real” education.',
        'The Future Human Project is India’s first subject-integrated, zero-teacher-burden initiative designed to nurture whole-child development across primary education. Built on the core belief that life skills should be deeply immersive rather than reduced to worksheets and lectures, the project seamlessly embeds social-emotional learning (SEL) directly into core academic subjects like Science, English, Arts, and Social Science.',
      ],
      pillars: ['Knowing Yourself', 'Knowing Others', 'Knowing the World', 'Knowing Nature'],
      pillarText: 'Guided by four developmental pillars, it transforms everyday academic topics into experiential doorways that foster emotional resilience, critical reasoning, and ethical clarity in young learners.',
      problem: 'In an era dominated by artificial intelligence and digital technology, information is no longer a scarce resource, making rote learning and memorization obsolete for future success. Yet, traditional schooling continues to prioritize marks over mindsets, causing children to lose touch with who they are and how to navigate real-world challenges. When schools do attempt to introduce life skills, Social-Emotional Learning is almost always treated as an isolated, non-graded “filler” period, a secondary class that gets pushed aside during busy academic schedules, leaving students to view self-awareness and empathy as separate from their “real” education.',
      solutions: [
        { title: 'Seamless Subject Integration', text: 'Life tools are woven directly into graded coursework, allowing students to build resilience, self-regulation, and empathy while revising the basics of core subject topics.' },
        { title: 'Hands-On Experiential Learning', text: 'Moving far away from rigid presentations, the curriculum utilizes interactive labs, reflection circles, creative arts, and outdoor immersions to make human development tangible and engaging.' },
        { title: 'Zero Teacher Burden', text: 'Executed entirely by trained external facilitators with all session materials provided, the framework places no extra operational or logistical load on existing school faculty.' },
        { title: 'Qualitative Growth Portfolios', text: 'Rather than using stressful written exams, student progress is captured through non-exam reflective assessment frameworks and qualitative Student Human Growth Portfolios, giving parents and educators clear insight into a child’s evolving character and leadership.' },
      ],
      tagline: 'Integrate. Evolve. Lead. Flourish.',
      instagramUrl: 'https://instagram.com/yourhandle',
      featureImage: '/assets/images/future_human_hero.webp',
      galleryImage: '/assets/images/Future human Project main_result.webp',
    },
  },
  {
    id: 'past-projects',
    label: 'SnackTime Experiences',
    title: 'Past Projects',
    description: 'Little moments that are building this community.',
    image: placeholderImage,
    layout: 'pastProjects',
    details: {
      events: [
        { title: 'Banter', text: 'As Snack Time’s inaugural opening event, Banter was built around the core themes of meaningful conversation and human connection. Designed as a welcoming space for families, it invited parents and children alike to engage in shared dialogue, explore what it truly means to build a supportive community, and experience the simple joy of coming together.' },
        { title: 'Nazariya with Nisargamitra', text: 'This nature-centered workshop guided children through the concept of perspective through the lens of the natural world. By observing plants, animals, and natural elements, children learned how everyone—including themselves and their peers—views the world differently, celebrating these unique viewpoints to realize that diversity is what makes every individual beautiful.' },
        { title: 'Nazariya in the City', text: 'Taking the core philosophy of perspective into the bustling urban landscape, Nazariya in the City invited children to discover fresh ways of seeing their daily surroundings. Through interactive exploration, young participants mapped their personal worldviews against the city’s vibrant backdrop, learning to appreciate both individual differences and shared urban spaces.' },
        { title: 'Qala: Immersive Art Event', text: 'Qala invited children into an immersive artistic journey exploring how color, texture, and form tell stories. The session highlighted the idea that art has no single interpretation, encouraging participants to trust their unique creative expressions and recognize that every artist sees and paints the world through a different lens.' },
        { title: 'Qala: Art Festival', text: 'Expanding the core message of Qala into a full-day celebration, the Art Festival transformed learning into an expansive playground of creativity. Children and families spent the day engaging in diverse art-based activities, collaborative creations, and open-ended exploration designed to spark imagination and celebrate individual artistic voices.' },
        { title: 'Qala: The Art Picnic', text: 'Blending nature, urban exploration, and visual art, The Art Picnic took participants on a reflective city walk. After capturing observations and sensory details along the way, everyone gathered in a tranquil garden setting to translate their personal impressions and memories directly onto canvas.' },
        { title: 'Batti Gul', text: 'Facilitated by esteemed director and artist Mukesh Jadhav, Batti Gul was a shadow storytelling event focused on emotional self-regulation. Through light, shadow, and narrative performance, children explored how to navigate complex feelings, building self-awareness and emotional resilience in an engaging, creative environment.' },
        { title: 'Nurturing the Nurturer', text: 'Recognizing that parents need dedicated space to play and reset, Nurturing the Nurturer was designed specifically for caregivers. This special event invited parents to step away from daily responsibilities, reconnect with their own sense of wonder, and relive the unfiltered, playful joy of childhood alongside a supportive parent community.' },
        { title: 'Cinema Ghar', text: 'Celebrating the art of moving pictures, Cinema Ghar offered a creative dive into the world of film. Participants explored cinematic storytelling, visual nuances, and character perspectives, learning how stories told through film can build empathy, spark conversation, and connect audiences.' },
        { title: 'Musafir', text: 'Musafir was an exploratory city walk designed to help participants discover Mumbai’s hidden gems through tactile creation. Combining urban navigation with hands-on expression, attendees captured their journey through reflective journaling, block printing, and letter-writing by the ocean.' },
        { title: 'Main Toh Bas Ek Insaan Hu', text: 'Hosted in collaboration with the Kala Ghoda Arts Festival, Main Toh Bas Ek Insaan Hu was a workshop celebrating humanity and the quiet hero within every child. The session guided young participants to explore empathy, self-acceptance, and human connection, helping them recognize that every individual possesses unique qualities that contribute to the greater good. Through creative reflection, children learned to honor their distinct strengths while celebrating the shared values that bring us all together.' },
        { title: 'A Puddle Story: Paint Your Rainy Day', text: 'The Puddle Story: Paint Your Rainy Day was a cozy monsoon painting event designed to teach children about emotional self-awareness and resilience. Through hands-on painting and storytelling, young participants explored the idea that no matter how gray or stormy the external weather may be, we always have the power to shift our internal climate using creativity, color, and imagination.' },
        { title: 'The Book Club', text: ' The Book Club is a Snack Time series that brings children together through the joy of stories. Each edition creates a warm, open space to read, listen, recite, express and imagine, while encouraging children to explore books at their own pace and connect with one another.' },
      ].map((event, index) => ({ ...event, image: pastEventImages[index] })),
      // Add each actual logo to public/assets/images/partners/ and replace its path below.
      partners: [
        { name: 'The Little House', logo: '/assets/logo/The_Little_House_Ehsaas.png' },
        { name: 'Buns & Wraps', logo: '/assets/logo/Buns_Wraps_Community.png' },
        { name: 'Hued Threaded Crafts' , logo: '/assets/logo/hued_threaded_crafts_community.png' },
        { name: 'Shantae', logo: '/assets/logo/shantae_community.png' },
        { name: 'Suan Artland', logo: '/assets/images/dummy.avif' },
        { name: 'Let’s Art', logo: '/assets/images/dummy.avif' },
        { name: 'Love Churros', logo: '/assets/images/dummy.avif' },
        { name: 'Bal Kala Shibir', logo: '/assets/logo/Bal_Shibir_ehsaas.png' },
        { name: 'Nautilus', logo: '/assets/logo/Nautilus_ST_Ehsaas.png' },
        { name: 'Candies', logo: '/assets/images/dummy.avif' },
        { name: 'Pause to Unpause', logo: '/assets/logo/pause_community.jpg' },
        { name: 'Subko', logo: '/assets/images/dummy.avif' },
        { name: 'Yaass', logo: '/assets/logo/yaass_community.png' },
        { name: 'Social Narrative', logo: '/assets/images/dummy.avif' },
      ],
    },
  },
  {
    id: 'album',
    visible: false,
    label: 'SnackTime Project',
    title: 'Album',
    description: 'Enter to relive childhood ',
    image: placeholderImage,
    layout: 'album',
    details: {
      images: albumImages,
      intro: 'A little collection of big feelings, muddy shoes, bright colours, and the kind of moments that stay with us.',
      sections: [
        { title: 'Small hands, big worlds.', text: 'Every SnackTime gathering holds a new story. These frames are tiny windows into the play, conversation, laughter, and curiosity we share together.' },
        { title: 'Made of moments.', text: 'The best parts of childhood are often the unplanned ones: a friend found in a workshop, paint on a sleeve, a question asked without fear, and a day remembered long after it ends.' },
      ],
    },
  },
  {
    id: 'blog',
    visible: false,
    label: 'SnackTime Project',
    title: 'Blog',
    description: 'Growing good things together, one seed at a time.',
    image: placeholderImage,
    objectives: ['Learn how food grows', 'Nurture responsibility', 'Connect with nature'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
];
