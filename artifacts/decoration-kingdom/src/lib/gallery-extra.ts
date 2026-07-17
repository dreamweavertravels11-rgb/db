/**
 * Extra gallery items sourced from the uploaded real-work images.
 * These supplement the packages-data gallery without touching the packages catalog.
 */

// ── Anniversary ──────────────────────────────────────────────
import gAnn2  from "@/assets/gallery/g-ann2.jpg";
import gAnn3  from "@/assets/gallery/g-ann3.jpg";
import gAnn4  from "@/assets/gallery/g-ann4.jpg";
import gAnn5  from "@/assets/gallery/g-ann5.jpg";
import gAnn6  from "@/assets/gallery/g-ann6.jpg";

// ── Baby Shower – Boy ─────────────────────────────────────────
import gBbs1  from "@/assets/gallery/g-bbs-1.jpg";
import gBbs2  from "@/assets/gallery/g-bbs-2.jpg";
import gBbs3  from "@/assets/gallery/g-bbs-3.jpg";
import gBbs4  from "@/assets/gallery/g-bbs-4.jpg";

// ── Baby Shower – Girl ────────────────────────────────────────
import gGbs1  from "@/assets/gallery/g-gbs-1.jpg";
import gGbs2  from "@/assets/gallery/g-gbs-2.jpg";
import gGbs3  from "@/assets/gallery/g-gbs-3.jpg";
import gGbs4  from "@/assets/gallery/g-gbs-4.jpg";

// ── Birthday – Adults ─────────────────────────────────────────
import gBday1 from "@/assets/gallery/g-bday-1.jpg";
import gBday2 from "@/assets/gallery/g-bday-2.jpg";
import gBday3 from "@/assets/gallery/g-bday-3.jpg";
import gBday4 from "@/assets/gallery/g-bday-4.jpg";
import gBday5 from "@/assets/gallery/g-bday-5.jpg";
import gBday6 from "@/assets/gallery/g-bday-6.jpg";

// ── Birthday Kids – Boy ───────────────────────────────────────
import gBboy1 from "@/assets/gallery/g-bboy-1.jpg";
import gBboy2 from "@/assets/gallery/g-bboy-2.jpg";
import gBboy3 from "@/assets/gallery/g-bboy-3.jpg";
import gBboy4 from "@/assets/gallery/g-bboy-4.jpg";
import gBboy5 from "@/assets/gallery/g-bboy-5.jpg";
import gBboy6 from "@/assets/gallery/g-bboy-6.jpg";
import gBboy7 from "@/assets/gallery/g-bboy-7.jpg";

// ── Birthday Kids – Girl ──────────────────────────────────────
import gBgirl1 from "@/assets/gallery/g-bgirl-1.jpg";
import gBgirl2 from "@/assets/gallery/g-bgirl-2.jpg";
import gBgirl3 from "@/assets/gallery/g-bgirl-3.jpg";
import gBgirl4 from "@/assets/gallery/g-bgirl-4.jpg";
import gBgirl5 from "@/assets/gallery/g-bgirl-5.jpg";
import gBgirl6 from "@/assets/gallery/g-bgirl-6.jpg";
import gBgirl7 from "@/assets/gallery/g-bgirl-7.jpg";

// ── Haldi ─────────────────────────────────────────────────────
import gHaldi1  from "@/assets/gallery/g-haldi-1.jpg";
import gHaldi2  from "@/assets/gallery/g-haldi-2.jpg";
import gHaldi3  from "@/assets/gallery/g-haldi-3.jpg";
import gHaldi4  from "@/assets/gallery/g-haldi-4.jpg";
import gHaldi5  from "@/assets/gallery/g-haldi-5.jpg";
import gHaldi6  from "@/assets/gallery/g-haldi-6.jpg";
import gHaldi7  from "@/assets/gallery/g-haldi-7.jpg";
import gHaldi8  from "@/assets/gallery/g-haldi-8.jpg";
import gHaldi9  from "@/assets/gallery/g-haldi-9.jpg";
import gHaldi10 from "@/assets/gallery/g-haldi-10.jpg";
import gHaldi11 from "@/assets/gallery/g-haldi-11.jpg";
import gHaldi12 from "@/assets/gallery/g-haldi-12.jpg";
import gHaldi13 from "@/assets/gallery/g-haldi-13.jpg";
import gHaldi14 from "@/assets/gallery/g-haldi-14.jpg";

// ── Mehandi ───────────────────────────────────────────────────
import gMehandi1 from "@/assets/gallery/g-mehandi-1.jpg";
import gMehandi2 from "@/assets/gallery/g-mehandi-2.jpg";

// ── Ring Ceremony ─────────────────────────────────────────────
import gRc1 from "@/assets/gallery/g-rc-1.jpg";
import gRc2 from "@/assets/gallery/g-rc-2.jpg";
import gRc3 from "@/assets/gallery/g-rc-3.jpg";
import gRc4 from "@/assets/gallery/g-rc-4.jpg";

// ── Naming Ceremony – Boys ────────────────────────────────────
import gNcb1 from "@/assets/gallery/g-ncb-1.jpg";
import gNcb2 from "@/assets/gallery/g-ncb-2.jpg";
import gNcb3 from "@/assets/gallery/g-ncb-3.jpg";
import gNcb4 from "@/assets/gallery/g-ncb-4.jpg";

// ── Naming Ceremony – Girls ───────────────────────────────────
import gNcg1 from "@/assets/gallery/g-ncg-1.jpg";
import gNcg2 from "@/assets/gallery/g-ncg-2.jpg";
import gNcg3 from "@/assets/gallery/g-ncg-3.jpg";
import gNcg4 from "@/assets/gallery/g-ncg-4.jpg";

// ── Proposals ─────────────────────────────────────────────────
import gProp1 from "@/assets/gallery/g-prop-1.jpg";
import gProp2 from "@/assets/gallery/g-prop-2.jpg";
import gProp3 from "@/assets/gallery/g-prop-3.jpg";
import gProp4 from "@/assets/gallery/g-prop-4.jpg";
import gProp5 from "@/assets/gallery/g-prop-5.jpg";
import gProp6 from "@/assets/gallery/g-prop-6.jpg";
import gProp7 from "@/assets/gallery/g-prop-7.jpg";

// ─────────────────────────────────────────────────────────────

export type GalleryItem = {
  slug: string;
  title: string;
  eyebrow: string;
  img: string;
  sectionId: string;
  sectionTitle: string;
};

export const extraGalleryItems: GalleryItem[] = [
  // Anniversary
  { slug: "g-ann-2",  title: "Anniversary Decoration",         eyebrow: "Anniversary",    img: gAnn2,     sectionId: "anniversary", sectionTitle: "Anniversary" },
  { slug: "g-ann-3",  title: "Anniversary Room Setup",         eyebrow: "Anniversary",    img: gAnn3,     sectionId: "anniversary", sectionTitle: "Anniversary" },
  { slug: "g-ann-4",  title: "Anniversary Balloon Décor",      eyebrow: "Anniversary",    img: gAnn4,     sectionId: "anniversary", sectionTitle: "Anniversary" },
  { slug: "g-ann-5",  title: "Anniversary Surprise Setup",     eyebrow: "Anniversary",    img: gAnn5,     sectionId: "anniversary", sectionTitle: "Anniversary" },
  { slug: "g-ann-6",  title: "Anniversary Floral Decoration",  eyebrow: "Anniversary",    img: gAnn6,     sectionId: "anniversary", sectionTitle: "Anniversary" },

  // Baby Shower – Boy
  { slug: "g-bbs-1",  title: "Baby Shower – Baby Boy",         eyebrow: "Baby Shower",    img: gBbs1,     sectionId: "baby-shower", sectionTitle: "Baby Shower" },
  { slug: "g-bbs-2",  title: "Baby Boy Shower Décor",          eyebrow: "Baby Shower",    img: gBbs2,     sectionId: "baby-shower", sectionTitle: "Baby Shower" },
  { slug: "g-bbs-3",  title: "Blue Baby Shower Setup",         eyebrow: "Baby Shower",    img: gBbs3,     sectionId: "baby-shower", sectionTitle: "Baby Shower" },
  { slug: "g-bbs-4",  title: "Baby Boy Balloon Arch",          eyebrow: "Baby Shower",    img: gBbs4,     sectionId: "baby-shower", sectionTitle: "Baby Shower" },

  // Baby Shower – Girl
  { slug: "g-gbs-1",  title: "Baby Shower – Baby Girl",        eyebrow: "Baby Shower",    img: gGbs1,     sectionId: "baby-shower", sectionTitle: "Baby Shower" },
  { slug: "g-gbs-2",  title: "Pink Baby Shower Décor",         eyebrow: "Baby Shower",    img: gGbs2,     sectionId: "baby-shower", sectionTitle: "Baby Shower" },
  { slug: "g-gbs-3",  title: "Baby Girl Shower Setup",         eyebrow: "Baby Shower",    img: gGbs3,     sectionId: "baby-shower", sectionTitle: "Baby Shower" },
  { slug: "g-gbs-4",  title: "Floral Baby Shower – Girl",      eyebrow: "Baby Shower",    img: gGbs4,     sectionId: "baby-shower", sectionTitle: "Baby Shower" },

  // Birthday Adults
  { slug: "g-bday-1", title: "Birthday Room Decoration",       eyebrow: "Birthday",       img: gBday1,    sectionId: "birthday",    sectionTitle: "Birthday" },
  { slug: "g-bday-2", title: "Balloon Birthday Setup",         eyebrow: "Birthday",       img: gBday2,    sectionId: "birthday",    sectionTitle: "Birthday" },
  { slug: "g-bday-3", title: "Birthday Surprise Décor",        eyebrow: "Birthday",       img: gBday3,    sectionId: "birthday",    sectionTitle: "Birthday" },
  { slug: "g-bday-4", title: "Premium Birthday Decoration",    eyebrow: "Birthday",       img: gBday4,    sectionId: "birthday",    sectionTitle: "Birthday" },
  { slug: "g-bday-5", title: "Birthday Balloon Arch",          eyebrow: "Birthday",       img: gBday5,    sectionId: "birthday",    sectionTitle: "Birthday" },
  { slug: "g-bday-6", title: "Birthday Backdrop Setup",        eyebrow: "Birthday",       img: gBday6,    sectionId: "birthday",    sectionTitle: "Birthday" },

  // Birthday Kids – Boy
  { slug: "g-bboy-1", title: "Baby Boy Birthday Decoration",   eyebrow: "Kids Birthday",  img: gBboy1,    sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bboy-2", title: "Kids Birthday – Blue Theme",     eyebrow: "Kids Birthday",  img: gBboy2,    sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bboy-3", title: "Baby Boy Theme Setup",           eyebrow: "Kids Birthday",  img: gBboy3,    sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bboy-4", title: "Boy's 1st Birthday Décor",       eyebrow: "Kids Birthday",  img: gBboy4,    sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bboy-5", title: "Baby Boy Balloon Decoration",    eyebrow: "Kids Birthday",  img: gBboy5,    sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bboy-6", title: "Kids Birthday Room – Boy",       eyebrow: "Kids Birthday",  img: gBboy6,    sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bboy-7", title: "Baby Boy Party Setup",           eyebrow: "Kids Birthday",  img: gBboy7,    sectionId: "kids",        sectionTitle: "Kids" },

  // Birthday Kids – Girl
  { slug: "g-bgirl-1", title: "Baby Girl Birthday Decoration", eyebrow: "Kids Birthday",  img: gBgirl1,   sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bgirl-2", title: "Kids Birthday – Pink Theme",    eyebrow: "Kids Birthday",  img: gBgirl2,   sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bgirl-3", title: "Baby Girl Theme Setup",         eyebrow: "Kids Birthday",  img: gBgirl3,   sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bgirl-4", title: "Girl's 1st Birthday Décor",     eyebrow: "Kids Birthday",  img: gBgirl4,   sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bgirl-5", title: "Baby Girl Balloon Decoration",  eyebrow: "Kids Birthday",  img: gBgirl5,   sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bgirl-6", title: "Kids Birthday Room – Girl",     eyebrow: "Kids Birthday",  img: gBgirl6,   sectionId: "kids",        sectionTitle: "Kids" },
  { slug: "g-bgirl-7", title: "Baby Girl Party Setup",         eyebrow: "Kids Birthday",  img: gBgirl7,   sectionId: "kids",        sectionTitle: "Kids" },

  // Haldi
  { slug: "g-haldi-1",  title: "Haldi Ceremony Decoration",   eyebrow: "Haldi",          img: gHaldi1,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-2",  title: "Haldi Stage Setup",           eyebrow: "Haldi",          img: gHaldi2,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-3",  title: "Marigold Haldi Décor",        eyebrow: "Haldi",          img: gHaldi3,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-4",  title: "Traditional Haldi Setup",     eyebrow: "Haldi",          img: gHaldi4,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-5",  title: "Haldi Floral Decoration",     eyebrow: "Haldi",          img: gHaldi5,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-6",  title: "Haldi Canopy Setup",          eyebrow: "Haldi",          img: gHaldi6,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-7",  title: "Outdoor Haldi Decoration",    eyebrow: "Haldi",          img: gHaldi7,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-8",  title: "Haldi Seating Décor",         eyebrow: "Haldi",          img: gHaldi8,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-9",  title: "Haldi Ceremony Styling",      eyebrow: "Haldi",          img: gHaldi9,   sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-10", title: "Premium Haldi Setup",         eyebrow: "Haldi",          img: gHaldi10,  sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-11", title: "Haldi Backdrop Decoration",   eyebrow: "Haldi",          img: gHaldi11,  sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-12", title: "Haldi Function Décor",        eyebrow: "Haldi",          img: gHaldi12,  sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-13", title: "Colourful Haldi Decoration",  eyebrow: "Haldi",          img: gHaldi13,  sectionId: "haldi",       sectionTitle: "Haldi" },
  { slug: "g-haldi-14", title: "Grand Haldi Stage Setup",     eyebrow: "Haldi",          img: gHaldi14,  sectionId: "haldi",       sectionTitle: "Haldi" },

  // Mehandi
  { slug: "g-mehandi-1", title: "Mehendi Ceremony Decoration", eyebrow: "Mehendi",       img: gMehandi1, sectionId: "mehendi",     sectionTitle: "Mehendi" },
  { slug: "g-mehandi-2", title: "Mehendi Floral Stage Setup",  eyebrow: "Mehendi",       img: gMehandi2, sectionId: "mehendi",     sectionTitle: "Mehendi" },

  // Ring Ceremony
  { slug: "g-rc-1", title: "Ring Ceremony Decoration",         eyebrow: "Ring Ceremony",  img: gRc1,      sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-rc-2", title: "Engagement Ring Ceremony Setup",   eyebrow: "Ring Ceremony",  img: gRc2,      sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-rc-3", title: "Ring Ceremony Backdrop Décor",     eyebrow: "Ring Ceremony",  img: gRc3,      sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-rc-4", title: "Grand Ring Ceremony Setup",        eyebrow: "Ring Ceremony",  img: gRc4,      sectionId: "ring",        sectionTitle: "Ring & Proposal" },

  // Naming Ceremony – Boys
  { slug: "g-ncb-1", title: "Naming Ceremony – Baby Boy",      eyebrow: "Welcome Baby",   img: gNcb1,     sectionId: "welcome-baby", sectionTitle: "Welcome Baby" },
  { slug: "g-ncb-2", title: "Baby Boy Naming Décor",           eyebrow: "Welcome Baby",   img: gNcb2,     sectionId: "welcome-baby", sectionTitle: "Welcome Baby" },
  { slug: "g-ncb-3", title: "Blue Naming Ceremony Setup",      eyebrow: "Welcome Baby",   img: gNcb3,     sectionId: "welcome-baby", sectionTitle: "Welcome Baby" },
  { slug: "g-ncb-4", title: "Naming Ceremony Balloon Arch",    eyebrow: "Welcome Baby",   img: gNcb4,     sectionId: "welcome-baby", sectionTitle: "Welcome Baby" },

  // Naming Ceremony – Girls
  { slug: "g-ncg-1", title: "Naming Ceremony – Baby Girl",     eyebrow: "Welcome Baby",   img: gNcg1,     sectionId: "welcome-baby", sectionTitle: "Welcome Baby" },
  { slug: "g-ncg-2", title: "Baby Girl Naming Décor",          eyebrow: "Welcome Baby",   img: gNcg2,     sectionId: "welcome-baby", sectionTitle: "Welcome Baby" },
  { slug: "g-ncg-3", title: "Pink Naming Ceremony Setup",      eyebrow: "Welcome Baby",   img: gNcg3,     sectionId: "welcome-baby", sectionTitle: "Welcome Baby" },
  { slug: "g-ncg-4", title: "Naming Ceremony Floral Arch",     eyebrow: "Welcome Baby",   img: gNcg4,     sectionId: "welcome-baby", sectionTitle: "Welcome Baby" },

  // Proposals
  { slug: "g-prop-1", title: "Romantic Proposal Setup",        eyebrow: "Proposal",       img: gProp1,    sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-prop-2", title: "Surprise Proposal Decoration",   eyebrow: "Proposal",       img: gProp2,    sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-prop-3", title: "Proposal Stage Styling",         eyebrow: "Proposal",       img: gProp3,    sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-prop-4", title: "Rose Petal Proposal Setup",      eyebrow: "Proposal",       img: gProp4,    sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-prop-5", title: "Candlelit Proposal Décor",       eyebrow: "Proposal",       img: gProp5,    sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-prop-6", title: "Floral Proposal Decoration",     eyebrow: "Proposal",       img: gProp6,    sectionId: "ring",        sectionTitle: "Ring & Proposal" },
  { slug: "g-prop-7", title: "Premium Proposal Setup",         eyebrow: "Proposal",       img: gProp7,    sectionId: "ring",        sectionTitle: "Ring & Proposal" },
];
