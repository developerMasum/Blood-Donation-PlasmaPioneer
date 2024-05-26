export interface TDonner {
  id: string;
  name: string;
  email: string;
  bloodType: string;
  location: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  UserProfile: {
    id: string;
    userId: string;
    bio: string | null;
    age: number | null;
    lastDonationDate: string;
    profilePhoto: string | null;
    createdAt: string;
    updatedAt: string;
  };
} 


  export const bloodGroups: string[] = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];