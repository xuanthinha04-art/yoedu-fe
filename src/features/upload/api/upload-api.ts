import { axiosClient } from '@/shared/lib/axios';

export const uploadApi = {
  uploadImage: (formData: FormData) => axiosClient.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
};
