 const loadPhone = async (searchText, isShowAll) =>{
   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
   const data = await res.json();
   const phone = data.data;
   displayPhone(phone, isShowAll);
 }


 const  displayPhone =( phones, isShowAll) =>{
  const cardContainer = document.getElementById('phone-conatiner');
  // clear phone container
  cardContainer.textContent = '';
  
const showAllContainer = document.getElementById('show-all-container');
  // show all button if 
  if(phones.length > 12 && !isShowAll){
    showAllContainer.classList.remove('hidden');
  }else{
    showAllContainer.classList.add('hidden');
  }
  // 
  console.log( 'show aall', isShowAll);
  // show all button system
  
  if(!isShowAll){
    phones = phones.slice(0, 12)
  }
  phones.forEach(phones => {
    console.log( phones);
    // create a div
    const  phoneCard = document.createElement('div');
     phoneCard.classList = `card p-4 bg-gray-100  `;
     phoneCard.innerHTML =`
      <figure><img class="p-4 bg-pink-200 rounded-md" src="${phones.image}"
      alt="Shoes" /></figure>
      <div class="card-body">
         <h2 class="card-title"> ${phones.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-center">
             <button onclick="showDetailsClick('${phones.slug}')" class="btn btn-primary">Show Details</button>
         </div>
      </div>
    `;
    cardContainer.appendChild(phoneCard);
  });

  // hide loding spiner
  toggleLoadingSpiner(false);
 }




//  show detail modal
const showDetailsClick = async (id) =>{
  console.log( 'click show del', id);

  // load data
const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data =await res.json();
console.log( data);
}


//  search button
const handleSearch = (isShowAll) =>{
  toggleLoadingSpiner(true);
   const searchFild = document.getElementById('search-fild');
   const searchText = searchFild.value;
   console.log( searchText);

   loadPhone(searchText, isShowAll);
}

// loading spiner
const toggleLoadingSpiner = (isLoading) =>{
  const lodingSpiner = document.getElementById('loading-spiner');
  if(isLoading){
    lodingSpiner.classList.remove('hidden')
  }
  else{
    lodingSpiner.classList.add('hidden')
  }
 
}

// show all button
const handleShowAll = () =>{
 handleSearch(true)
}

//  loadPhone();