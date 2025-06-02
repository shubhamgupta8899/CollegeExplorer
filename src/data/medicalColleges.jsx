const medicalColleges = [
    {
      name: "AIIMS Delhi",
      website: "https://www.aiims.edu",
      image: "https://imgs.search.brave.com/bi4AdIXLHeKZwrf97qNT6Sl80EqwWDd1thw9um9aDHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vYnNEWWVU/WEk1ZHlGTjdOZHdX/TElNcEJxYmpUaW5i/Z3hZaG9aYzR1d29z/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/WVd4cy9jR0Z3WlhK/aFkyTmxjM011L1ky/OXRMMloxYkd3dk9E/UXcvTmpnNE15NXFj/R2M",
      ranking: 1,
      topPackage: "₹2.1 Cr",
    },
    {
      name: "CMC Vellore",
      website: "https://www.cmch-vellore.edu",
      image: "https://imgs.search.brave.com/6xInUQp6RJapNGwfYV2qf8K2eJz-yrXbo96gDgsfCOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRmJXN0dN/NkdJcVBoZnk3ZWhm/R1pPOWxIX0dLbUxS/MlFkbHlaUm40c1A1/WS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMjFqYUMx/MlpXeHNiM0psL0xt/VmtkUzkzY0MxamIy/NTAvWlc1MEwzVndi/RzloWkhNdi9jMmww/WlhNdk1UUXZNakF5/L015OHdNeTlvYjNj/dGRHOHQvZEdGclpT/MW5aWEp1WlhKaC9i/QzEwWlhOMGN5MWhk/QzFEL1RVTXRWbVZz/Ykc5eVpTMVMvWVc1/cGNHVjBMVU5oYlhC/MS9jeTV3Ym1j",
      ranking: 2,
      topPackage: "₹50 LPA",
    },
    {
      name: "JIPMER Pondicherry",
      website: "https://www.jipmer.edu.in",
      image: "https://imgs.search.brave.com/mwvhPbK5OznrF1coL__CIV--u_qGuhtMzhbyHAq3Qlw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vX19VS2Fw/aW1feHc4Q0VOekRY/dXVHdFNuMmlFMGh5/Zm5abkxLc0JOOFZ6/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl3/WjJNdS9kVzVqTG1W/a2RTOTNjQzFqL2Iy/NTBaVzUwTDNWd2JH/OWgvWkhNdk1qQXlN/eTh3TWk5cS9hWEJ0/WlhJdFluVnBiR1Jw/L2JtY3VjRzVu",
      ranking: 3,
      topPackage: "₹45 LPA",
    },
    {
      name: "Maulana Azad Medical College",
      website: "https://www.mamc.ac.in",
      image: "https://imgs.search.brave.com/Hh-gNubTMUU2NQQWhaMYoyXduC1CewnfI8-B3FKdRn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vSlZEQmRE/VWhic2VkSzFpeVRT/NkdVMXBpUzYzUG5Q/QjdkUTltM3hUWTFq/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/YVcxbC9jM016YzNC/dmNtVXVjek11L1lX/MWhlbTl1WVhkekxt/TnYvYlM5dVpHRjBZ/Uzl0WldScC9ZUzlE/YjNWdWMyVnNiRzl5/L0wwTnZiR3hsWjJW/SmJXRm4vWlM4d1lt/UTNORFV4TmpJMy9a/bVZoTW1FMlpqRm1a/REkyL1lqY3hNMll5/TUdZek0ydGsvYm1O/ekxuQnVadw",
      ranking: 4,
      topPackage: "₹35 LPA",
    },
    {
      name: "Kasturba Medical College, Manipal",
      website: "https://manipal.edu/kmc-manipal.html",
      image: "https://imgs.search.brave.com/JoM5RfEy7aNKvq3tt--OINC0jmRxJL87DqYDDThCxUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vWmlwd1h0/eUNoeEYtSndYR202/Wi1oTG56bkMzS2Iz/NmRxZWNFLTFoXzkt/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlt/ZFhSMS9jbVZ0WW1K/ekxtTnZiUzkzL2ND/MWpiMjUwWlc1MEwz/VncvYkc5aFpITXZN/akF5TkM4dy9OQzly/YldNdWFuQmxadw",
      ranking: 5,
      topPackage: "₹40 LPA",
    },
    {
      name: "King George’s Medical University, Lucknow",
      website: "https://www.kgmu.org",
      image: "https://imgs.search.brave.com/8LDXThsS-SVbJ2qo8CbtIsnPqdtlHm_PEo-_oapxG90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vd2h0c3I5/SGVNbVRvOVh2VXBJ/dzkxT1lOZzdrNXJr/Qm01bTN0Yjg5UGUx/MC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVuWlhS/dGVYVnVhUzVqL2Iy/MHZZWHAxY21Vdlky/OXMvYkdWblpTMXBi/V0ZuWlM5aS9hV2N2/ZFc1cGRtVnljMmww/L2VTMXZaaTFzZFdO/cmJtOTMvTFhWc0xX/eDFZMnR1YjNjdS9k/MlZpY0E",
      ranking: 6,
      topPackage: "₹30 LPA",
    },
    {
      name: "Armed Forces Medical College (AFMC), Pune",
      website: "https://www.afmc.nic.in",
      image: "https://imgs.search.brave.com/LI-FCnV7XOiePdeQMw87X6XyB9gMX8ElGVqP9BX3DRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vaVIycDIz/dmVHek5qY25WODBz/RWZqcm9IRDRSZ1J4/UGE0cnh0MVlyWE0t/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZiM0pwL1oy/bHVZV3h6THpsaUx6/VTAvTHpabUx6bGlO/VFEyWm1OaS9OREJt/TjJSbFpESmtNRFk1/L05ERTRabVZsWTJN/NU1XRmsvTG1wd1p3",
      ranking: 7,
      topPackage: "₹32 LPA",
    },
  ];
  
  export default medicalColleges;
  