export const profileImages = [
  '/jaipurescort-main/images/profiles/girl1.jpg',
  '/jaipurescort-main/images/profiles/girl2.jpg',
  '/jaipurescort-main/images/profiles/girl3.jpg',
  '/jaipurescort-main/images/profiles/girl4.jpg',
  '/jaipurescort-main/images/profiles/girl5.jpg',
  '/jaipurescort-main/images/profiles/girl6.jpg',
  '/jaipurescort-main/images/profiles/girl7.jpg',
  '/jaipurescort-main/images/profiles/girl8.jpg',
  '/jaipurescort-main/images/profiles/girl9.jpg',
  '/jaipurescort-main/images/profiles/girl10.jpg',
  '/jaipurescort-main/images/profiles/girl11.jpg',
  '/jaipurescort-main/images/profiles/girl12.jpg',
  '/jaipurescort-main/images/profiles/girl13.jpg',
  '/jaipurescort-main/images/profiles/girl14.jpg',
  '/jaipurescort-main/images/profiles/girl15.jpg',
];

export const generateProfiles = (location: string) => {
  return profileImages.map((image, index) => ({
    id: index + 1,
    image,
    name: `${location} Angel ${index + 1}`,
    age: Math.floor(Math.random() * (30 - 20) + 20),
  }));
};