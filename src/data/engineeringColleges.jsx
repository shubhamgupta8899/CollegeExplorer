const engineeringColleges = [
    {
      name: "IIT Bombay",
      website: "https://www.iitb.ac.in",
      image: "https://assets.telegraphindia.com/telegraph/2024/Jun/1718884016_1718878194_iit-bombay.jpg",
      ranking: 1,
      topPackage: "45 LPA",
    },
    {
      name: "IIT Delhi",
      website: "https://home.iitd.ac.in",
      image: "https://etimg.etb2bimg.com/photo/117021328.cms",
      ranking: 2,
      topPackage: "40 LPA",
    },
    {
      name: "BITS Pilani",
      website: "https://www.bits-pilani.ac.in",
      image: "https://imgs.search.brave.com/bStsENJYe2wPxA98uA8uPJev2voatWnwQ7us68OwtBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vODJRWENw/Uk1TcFBaWG94bU4x/R01zMkZvLXlOcHp1/ajNXZkgtb3d6UmdX/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMkYwWVd4/NWMyVnlMbWx1L0wz/QjFZbXhwWXk5cGJX/Y3YvWW14dlp5OUZk/bVZ5ZVhSby9hVzVu/TFhsdmRTMXVaV1Zr/L0xYUnZMV3R1YjNj/dFlXSnYvZFhRdFFr/bFVVeTFRYVd4aC9i/bWt1YW5Cbg",
      ranking: 3,
      topPackage: "35 LPA",
    },
    {
      name: "IIT Madras",
      website: "https://www.iitm.ac.in",
      image: "https://imgs.search.brave.com/iWfvYdChIQKTkFTOgsIuRWGxnkNfKmc6TYni0o9CMlo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTzV3d0Nt/UE5HZ1NpcjBPVThs/U2UtVVlZV1Z3QzJt/b2kzeEtDa3VWUWdy/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZiM0pwL1oy/bHVZV3h6THpOaEwy/VmgvTHpnekx6Tmha/V0U0TXpZeS9OV0Zo/TWpRNFlUQmlaRGMw/L09HRXlaRFV4WmpO/bE9UZzIvTG1wd1p3",
      ranking: 4,
      topPackage: "38 LPA",
    },
    {
      name: "IIT Kanpur",
      website: "https://www.iitk.ac.in",
      image: "https://imgs.search.brave.com/zSz5wLPI7j7mY0N8fTkkQ7x-yAyUTwbBjI7ewhxY6Uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVlpxZ0Ji/Y3gtOW53bEt4X0Js/SmE3Z1VxbG9iMG1a/bHBmZ3RqU1Rnc2xs/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/YVcxbC9jM016YzNC/dmNtVXVjek11L1lX/MWhlbTl1WVhkekxt/TnYvYlM5dVpHRjBZ/Uzl0WldScC9ZUzlE/YjNWdWMyVnNiRzl5/L0wwTnZiR3hsWjJW/SmJXRm4vWlM5a09H/TmlPVEE0Tm1JMi9N/REJpWTJNeU9EZ3hN/VGs0L01qZG1Nelkw/TkdVM05Fc3kvTG1w/d1p3",
      ranking: 5,
      topPackage: "36 LPA",
    },
    {
      name: "IIT Kharagpur",
      website: "https://www.iitkgp.ac.in",
      image: "https://imgs.search.brave.com/dciPpZaZAaUHt8P9IDwbQyQ84u4OfDrq4hRZzYeMbkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vclpiRGV2/VjlBMjJHd3ZQaUgw/a0dYaVBzdXI3X1gw/eDJpTVFRU2ViM0FT/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkx/Y0d4di9ZV1F1ZDJs/cmFXMWxaR2xoL0xt/OXlaeTkzYVd0cGNH/VmsvYVdFdlkyOXRi/Vzl1Y3k4eC9MekZt/TDBKMVltRnBYMDFo/L2JtNWhYeWhKU1ZS/ZlMyaGgvY21GbmNI/VnlYMjFoYVc1Zi9Z/blZwYkdScGJtY3BM/bXB3L1p3",
      ranking: 6,
      topPackage: "34 LPA",
    },
    {
      name: "IIIT Hyderabad",
      website: "https://www.iiit.ac.in",
      image: "https://imgs.search.brave.com/QLFrD0US4TuVUnC-KY14ZSa1v_EnvtA_2EOLGEwf8KM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUzNaWFY4/cmx1QzBseXp3c01k/ZGFwSEJmQ2dSQjhv/WUJoRkkwRjZTajlR/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9hV2xwZEM1/aFl5NXBiaTkzL2ND/MWpiMjUwWlc1MEwz/VncvYkc5aFpITXZN/akF5TWk4dy9OaTlK/U1VsVVgwaDVaR1Z5/L1lXSmhaRjlNYjJk/dkxXVXgvTmpVMU1U/RTJPVE0zT1RnMi9M/bXB3Wnc",
      ranking: 7,
      topPackage: "32 LPA",
    }
  ];
  
  export default engineeringColleges;