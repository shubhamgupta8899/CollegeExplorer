const managementColleges = [
    {
      name: "IIM Ahmedabad",
      website: "https://www.iima.ac.in",
      image: "https://imgs.search.brave.com/H9_PP1Pe4G5Q7RV5dnZlI6HboulelDGkqh0v9PmFZQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vQXlDbG8x/dFhNeXp3VURYaHpz/bXVQOTBGd2lOLU9t/TVlIWkZQZUVROGNK/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZiM0pwL1oy/bHVZV3h6THpBeUx6/TmwvTDJVekx6QXlN/MlZsTTJRdy9aVFpq/TW1NM1pUWTFNamxr/L016Y3dOV0U0TldF/MVpXUmwvTG1wd1p3",
      ranking: 1,
      topPackage: "₹1.15 Cr",
    },
    {
      name: "IIM Bangalore",
      website: "https://www.iimb.ac.in",
      image: "https://imgs.search.brave.com/T8OdCZhpFDjAvEi16jITGKBSkyhjeoKp2BHwk3l0luk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veGQwR3Fn/dS1MamNtcWJfVkxl/RlM0d0Uyd0JocFJk/d0VvMC1Lc0FfQWlL/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/WVhKbC9aWEp0WVc1/MGNtRXViM0puL0wy/WnliMjUwWDJGemMy/VjAvY3k5cGJXRm5a/WE12U1c1ay9hV0Z1/WDBsdWMzUnBkSFYw/L1pWOXZabDlOWVc1/aFoyVnQvWlc1MFgw/SmhibWRoYkc5eS9a/UzVxY0dj",
      ranking: 2,
      topPackage: "₹1.1 Cr",
    },
    {
      name: "XLRI Jamshedpur",
      website: "https://www.xlri.ac.in",
      image: "https://imgs.search.brave.com/avC8iTb8H8ksRYPjwrV5qMadhhrZZlVFmTKwsxMcghE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVW1GelJI/U3UtZHhsSVk3cnlJ/bjdYUFc0Y2Vha0Z6/TW5RLW1YcW9XRDZn/MC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Y21Gai9hM1V1YVc0/dmJXVmthV0V2L2FX/MWhaMlZ6TDFoTVVr/a3QvTXpBd2VESXdN/QzUzWldKdw",
      ranking: 3,
      topPackage: "₹75 LPA",
    },
    {
      name: "IIM Calcutta",
      website: "https://www.iimcal.ac.in",
      image: "https://imgs.search.brave.com/KgE80JtfhGTaAxyoW8mrY94oEOF_y4MBkbMIjTTtwAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vY3Y0ekEt/U3I5NVVBREhwem9X/QjBLaFVUVU9qTmxa/RFkwWkU1eFYyOS1F/WS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkx/Y0d4di9ZV1F1ZDJs/cmFXMWxaR2xoL0xt/OXlaeTkzYVd0cGNH/VmsvYVdFdlpXNHZk/R2gxYldJdi9NeTh6/Wmk5SlNVMWZRMkZz/L1kzVjBkR0ZmVEc5/bmJ5NXovZG1jdk1q/VXdjSGd0U1VsTi9Y/ME5oYkdOMWRIUmhY/MHh2L1oyOHVjM1pu/TG5CdVp3",
      ranking: 4,
      topPackage: "₹1.2 Cr",
    },
    {
      name: "SPJIMR Mumbai",
      website: "https://www.spjimr.org",
      image: "https://imgs.search.brave.com/3rNeq8HFurOzpGG2pN3iQ6ImfmVpbzbBPSrr28QOiBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTTNoZ0Zs/WU5UeTNwQmgydFo3/S3kxZlkzMEV6UDFi/cHhReGZzVGVlVDBa/WS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkx/Y0d4di9ZV1F1ZDJs/cmFXMWxaR2xoL0xt/OXlaeTkzYVd0cGNH/VmsvYVdFdlkyOXRi/Vzl1Y3k4My9MemRp/TDFOUVNrbE5VbDlO/L2RXMWlZV2xmUTJG/dGNIVnovTG1wd1p3",
      ranking: 5,
      topPackage: "₹77 LPA",
    },
    {
      name: "NMIMS Mumbai",
      website: "https://www.nmims.edu",
      image: "https://imgs.search.brave.com/a25VzpZyyDTczAVh1YGeCtC2veLLQn6JLtYcEtuzojU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vQldMcFgt/cHFrbjdBN2NsVlV5/cVROaHNuUTVzV0J5/VmFMS19WMEpaa0lj/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9iWGxqWVcx/d2RYTnlaWFpwL1pY/Y3VZMjl0TDJsdFlX/ZGwvY3k5amIyeHNa/V2RsTHpFMi9PREUz/TVRNNE5qZ3hZUzV3/L2JtYw",
      ranking: 6,
      topPackage: "₹58 LPA",
    },
    {
      name: "FMS Delhi",
      website: "https://www.fms.edu",
      image: "https://imgs.search.brave.com/g7v4c_VuIUAal26D5o1bJAX9MGyJ58L-yioNr6gsA4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veDRlZVRz/eDFfX0xOdUVQMDZu/R2hnU3RDYlFaWUlz/WE42RDFKdW5zanlo/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9hWEYxWVc1/MFlTNXBiaTlpL2JH/OW5MM2R3TFdOdmJu/UmwvYm5RdmRYQnNi/MkZrY3k4eS9NREkx/THpBeUwxZG9ZWFJ6/L1FYQndMVWx0WVdk/bExUSXcvTWpVdE1E/SXRNREV0WVhRdC9N/eTR5TUM0eE1pMVFU/UzAyL09UWjRNemt5/TG1wd1pXYw",
      ranking: 7,
      topPackage: "₹70 LPA",
    },
  ];
  
  export default managementColleges;
  