// Team members, photos and social links taken from the existing TechNeeds website.
// Missing socials are omitted rather than invented.

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  x?: string;
};

export type Department = { id: string; name: string; members: TeamMember[] };

export const departments: Department[] = [
  {
    id: "founders",
    name: "FOUNDERS",
    members: [
      {
        name: "Vidushi Agarwal",
        role: "Founder",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724959866/WhatsApp_Image_2024-08-30_at_12.49.51_AM_cg7gmn.jpg",
        instagram: "https://www.instagram.com/agarwal.vidu?igsh=MWI4d3Jvb2locmVvcQ==",
        linkedin: "https://www.linkedin.com/in/vidushi-agarwal-a95885256",
        x: "https://x.com/Vidushit143?t=4mzUEuIsF2nzUOrDhU_NGw&s=09",
      },
      {
        name: "Sonam",
        role: "Founder",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724958308/IMG_20240430_003529_hk6mf6.jpg",
        instagram: "https://www.instagram.com/sonam_ydv0303?igsh=MTRiMW50NnBoZmthdg==",
        linkedin: "https://www.linkedin.com/in/sonam-yadav-a647ab258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        x: "https://x.com/137_sonam3429?t=FKbrPncJzaVnEoLwZDYnzA&s=09",
      },
      {
        name: "Sripriya Agarwal",
        role: "Founder",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724992510/b4eacac2-e23f-41b1-8ce1-69334b7dd27f_gztkzv.jpg",
        instagram: "https://www.instagram.com/sripriyaagarwal16?igsh=MXI3ejc3YXRzOXFhMA==",
        linkedin: "https://www.linkedin.com/in/sripriya-agarwal-483475261",
        x: "https://x.com/Agarwa1Sripriya",
      },
      {
        name: "Saie Prakhar Pawar",
        role: "Founder",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724958407/SaiePic_SquareFit_wh1gyn.jpg",
        instagram: "https://instagram.com/_.saiee?igshid=MzMyNGUyNmU2YQ==",
        linkedin: "https://www.linkedin.com/in/saie-pawar-96b27a262",
        x: "https://x.com/Saie__Pawar",
      },
      {
        name: "Avni Singh",
        role: "Founder",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1724998586/photo_6235583440917479616_x_vnz0tk.jpg",
      },
      {
        name: "Chanda Jha",
        role: "Founder",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724992377/58cc173a-2806-4dd4-9426-f37bafd91105_lekkdl.jpg",
      },
    ],
  },
  {
    id: "leads",
    name: "LEADS",
    members: [
      {
        name: "Joysa Jain",
        role: "President",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724959131/IMG_7050_duy2oc.png",
        instagram: "https://www.instagram.com/joysajain.21?igsh=MXhnM3Y1ZWloMGRmYw%3D%3D&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/joysa-jain-86b589283/",
      },
      {
        name: "Kashish Rastogi",
        role: "Vice President",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724959804/ef0car_tumptt.jpg",
        instagram: "https://www.instagram.com/brighttt4?igsh=MXV2cjViNGJ1aXN6Mw==",
        linkedin: "https://www.linkedin.com/in/kashish-rastogi-7a189b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        x: "https://x.com/KashishRastog19?t=hd_blcVaiJJtAWVsTtmrYw&s=09",
      },
      {
        name: "Anushka Shanker",
        role: "Vice President",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724958476/Myphoto_hiq3gg.jpg",
        instagram: "https://www.instagram.com/shankeranushka/",
        linkedin: "https://www.linkedin.com/in/anushka-shanker-061b6a218/",
        x: "https://x.com/ShankerAnu23798",
      },
      {
        name: "Pari Gupta",
        role: "Treasurer",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724959125/Pari_wiuvo0.jpg",
        instagram: "https://www.instagram.com/parigupta9667/",
        linkedin: "https://www.linkedin.com/in/pari-gupta-168564289/",
      },
      {
        name: "Nandini Jain",
        role: "Mentorship Moderator",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724959748/me_oqxnuy.jpg",
        instagram: "https://www.instagram.com/nandinijain004/",
        linkedin: "https://www.linkedin.com/in/nandini-jain-00967028b",
        x: "https://x.com/Nandini8409",
      },
      {
        name: "Srishti Sudhakar",
        role: "Mentorship Moderator",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756640728/Srishti_Sudhakar_Mentorhsip_Moderator_kcgfry.jpg",
        instagram: "https://www.instagram.com/srishtisudhakar?igsh=MTk0b2puMGRhc3Fkcg==",
        linkedin: "https://www.linkedin.com/in/srishti-sudhakar-828250276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        x: "https://x.com/SrishtiSud41882?t=q6pU5EOqP0wXBp-HJaQJPQ&s=09",
      },
      {
        name: "Areeba Khanam",
        role: "Team Manager",
        image: " https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756640873/Areeba_Khanam_-_Team_manager_khs2hq.jpg",
        instagram: "https://www.instagram.com/al_.hayy?igsh=dnI3aDNtNDNtZml6",
        linkedin: "https://www.linkedin.com/in/areeba-khan-70013128a",
      },
      {
        name: "Shreya",
        role: "Outreach Secretary",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756640977/Shreya_nt0i1v.jpg",
        linkedin: "https://www.linkedin.com/in/shreya-kumari-2ba266269/",
      },
    ],
  },
  {
    id: "event-management",
    name: "EVENT MANAGEMENT",
    members: [
      {
        name: "Preeti",
        role: "Head",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724958832/IMG_20240823_183007_yl75hp.jpg",
        instagram: "https://www.instagram.com/p_r_e_e_t_i_5555?igsh=ZnhvcmxjYmlvanI0",
        linkedin: "https://www.linkedin.com/in/preeti-127953294",
      },
      {
        name: "Sonali Yadav",
        role: "Head",
        image: " https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756650791/sonaliyadav_y80vsn.jpg",
        linkedin: "https://www.linkedin.com/in/sonali-yadav17/",
        x: "https://x.com/Sonali_yadav17",
      },
    ],
  },
  {
    id: "media",
    name: "MEDIA",
    members: [
      {
        name: "Vidhi Arora",
        role: "Head",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756651106/Vidhi_mediateam_nu7tcf.jpg",
      },
      {
        name: "Riya",
        role: "Head",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756651106/Riya_Media_Team_xyhytg.jpg",
        instagram: "https://www.instagram.com/rao_._riya/?hl=en",
        linkedin: "https://www.linkedin.com/in/riya-yadav-b64a45289/",
        x: "https://x.com/RiyaYadav199924_",
      },
    ],
  },
  {
    id: "content",
    name: "CONTENT",
    members: [
      {
        name: "Ekamjot Kaur",
        role: "Head",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756653221/Ekamjot_Kaur_-_Content_Team_grk2sw.jpg",
        instagram: "https://www.instagram.com/_kaur.ek_?igsh=MXJnYmkwcDYydm8wNA==",
        linkedin: "https://www.linkedin.com/in/ekamjot-kaur-oberoi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Suparna Lahiri",
        role: "Head",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756653221/Suparna_Lahiri_aefh5a.jpg",
        instagram: "https://www.instagram.com/itsokay_suparna",
        linkedin: "https://www.linkedin.com/in/suparna-l-904636244",
        x: "https://twitter.com/itsokay_Suparna",
      },
    ],
  },
  {
    id: "pr",
    name: "PR",
    members: [
      {
        name: "Niyati Mishra",
        role: "Head Coordinator",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724959554/niyatiTechneeds_q6xnde.jpg",
        linkedin: "https://www.linkedin.com/in/prachi-b-0a17a625a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Istuti Jain",
        role: "Head",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756664257/Istuti_PR_Team_g64mfr.jpg",
        instagram: "https://www.instagram.com/stuti_jn24",
        linkedin: "https://www.linkedin.com/in/istuti-jain-744b18298",
        x: "https://x.com/stutijn24",
      },
    ],
  },
  {
    id: "sponsorship",
    name: "SPONSORSHIP",
    members: [
      {
        name: "Shilpi Kumari",
        role: "Head",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724959317/DSC_0302_ozn1xo.jpg",
        linkedin: "https://www.linkedin.com/in/shilpi-kumari-45696128a",
      },
      {
        name: "Prakshi",
        role: "Head",
        image: "https://res.cloudinary.com/dcec61lxq/image/upload/w_800,c_fill,ar_4:5,g_face/v1724959316/1000046863_vhojlw.jpg",
        linkedin: "https://www.linkedin.com/in/prakshisagar",
      },
    ],
  },
  {
    id: "social-media",
    name: "SOCIAL MEDIA",
    members: [
      {
        name: "Sakshi Sharma",
        role: "Head",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756664258/Sakshi_sharma_media_team_xmltat.jpg",
        instagram: "https://www.instagram.com/sakshi.shhh/",
        linkedin: "https://www.linkedin.com/in/sakshi-sharma-188125277/",
        x: "https://x.com/SakshiS57199303",
      },
    ],
  },
  {
    id: "tech-team",
    name: "TECH TEAM",
    members: [
      {
        name: "Anjali",
        role: "Head",
        image: "https://res.cloudinary.com/dzwfmydmx/image/upload/w_800,c_fill,ar_4:5,g_face/v1756664636/Anjali_Dass_tech_team_mczybb.jpg",
        instagram: "https://www.instagram.com/__anj__09/",
        linkedin: "https://www.linkedin.com/in/anjali-dass-002b5a31a/",
        x: "https://x.com/SakshiS57199303",
      },
    ],
  },
];
