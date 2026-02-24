let interviewList = [];
let rejectedList = [];
let currentStatusBtn = 'all'

const allBtn = document.getElementById('allBtn');
const interviewBtn = document.getElementById('interviewBtn');
const rejectedBtn = document.getElementById('rejectedBtn');

const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const allCardSection = document.getElementById('allCard');
const filterSection = document.getElementById('filtered-section');
const mainContainer = document.querySelector('main');
const totalJobCount = document.getElementById("jobCount");

function calculateCount(){
    totalCount.innerText = allCardSection.children.length;
    const count = allCardSection.children.length;
    totalCount.innerText = count;
    totalJobCount.innerText = count +' Jobs'
    if(count == 0){
        allCardSection.innerHTML = ``
        allCardSection.innerHTML= `
         <div class="flex flex-col  items-center border border-[#e6e7e9] rounded justify-center mt-[60px]">
                <img src="jobs.png" alt="empty" class="mt-[111px]">
                <p class="text-[20px] font-bold text-blue-950 mt-4">No Jobs Available</p>
                <p class="text-gray-400 mt-2 mb-[111px]">Check back soon for new job opportunities.</p>
            </div>
        `
        return;
        
    };
} calculateCount()

function toggleStyle(id){
    if(id == 'interviewBtn'){
        totalJobCount.innerText = interviewList.length + ' Jobs';
    } else if(id == 'rejectedBtn'){
        totalJobCount.innerText = rejectedList.length + ' Jobs';
    } else{
        totalJobCount.innerText = allCardSection.children.length + ' Jobs';
    }
    allBtn.classList.remove('bg-blue-400', 'text-white' ,'font-bold');
    interviewBtn.classList.remove('bg-blue-400','text-white','font-bold');
    rejectedBtn.classList.remove('bg-blue-400','text-white','font-bold');

    allBtn.classList.add('bg-white','text-black');
    interviewBtn.classList.add('bg-white','text-black');
    rejectedBtn.classList.add('bg-white','text-black');

     // console.log(id);
    const selected = document.getElementById(id);
    // console.log(selected);
    // adding color for selected btn
    selected.classList.remove('bg-white','text-black');
    selected.classList.add('bg-blue-400','text-white','font-bold');
    currentStatusBtn = id;

    if(id == 'interviewBtn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        newInterview();

    } else if(id == 'rejectedBtn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        newReject();

    } else{
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
}

mainContainer.addEventListener('click',function(event){
    if(event.target.classList.contains('interview-btn')){
        const baba = event.target.parentNode.parentNode;
        const companyName = baba.querySelector('.company-name');
        const positionName = baba.querySelector('.position-name');
        const siteName = baba.querySelector('.site');
        const time = baba.querySelector('.time');
        const salary = baba.querySelector('.salary');
        const status = baba.querySelector('.status-btn');
        const notes = baba.querySelector('.notes');

        baba.querySelector('.status-btn').innerText = 'Applied';

        const jobInfo = {
            companyName: companyName.innerText,
            positionName : positionName.innerText,
            siteName: siteName.innerText,
            time: time.innerText,
            salary : salary.innerText,
            status:"Applied",
            notes:notes.innerText,
        }
        
        const cardExists = interviewList.find(item=> item.companyName == jobInfo.companyName);
        if(!cardExists){
            interviewList.push(jobInfo);
        }
         rejectedList = rejectedList.filter(item=>item.companyName !=jobInfo.companyName);

        //  count update
        interviewCount.innerText = interviewList.length;
        rejectedCount.innerText = rejectedList.length;
         if(currentStatusBtn == 'interviewBtn'){
            newInterview()
         }else if(currentStatusBtn == 'rejectedBtn'){
            newReject();
         }
    } else if(event.target.classList.contains('rejected-btn')){
        const parenNode = event.target.parentNode.parentNode;

        const companyName = parenNode.querySelector('.company-name');
        const positionName = parenNode.querySelector(".position-name");
        const siteName = parenNode.querySelector(".site");
        const time = parenNode.querySelector(".time");
        const salary = parenNode.querySelector('.salary');
        const status = parenNode.querySelector(".status-btn");
        const notes = parenNode.querySelector(".notes");

        parenNode.querySelector(".status-btn").innerText = "Rejected";

        const jobInfo = {
            companyName:companyName.innerText,
            positionName :positionName.innerText,
            siteName:siteName.innerText,
            time:time.innerText,
            salary:salary.innerText,
            status: "Rejected",
            notes:notes.innerText,
        };
        const cardExists = rejectedList.find(item=>item.companyName == jobInfo.companyName);
        if(!cardExists){
            rejectedList.push(jobInfo);
        }
        interviewList = interviewList.filter(item=>item.companyName !=jobInfo.companyName);
        // reject button count update
        interviewCount.innerText = interviewList.length;
        rejectedCount.innerText = rejectedList.length;
        if(currentStatusBtn == 'interviewBtn'){
            newInterview();
        } else if(currentStatusBtn == 'rejectedBtn'){
            newReject();
        }
        calculateCount()
    }
    else if(event.target.classList.contains('delete-btn')){
        const card = event.target.parentNode.parentNode;
        const companyName = card.querySelector('.company-name').innerText;
        interviewList = interviewList.filter(item=> item.companyName !=companyName);
        rejectedList = rejectedList.filter(item=> item.companyName !=companyName);
        card.remove();

        //update the count numbering
        calculateCount();
        interviewCount.innerText = interviewList.length;
        rejectedCount.innerText = rejectedList.length;

        if(currentStatusBtn =='interviewBtn'){
            newInterview();
        } else if(currentStatusBtn =="rejectedBtn"){
            newReject();
        }
    }
});

// new html file create with template literal
function newInterview(){
    filterSection.innerHTML='';
    if(interviewList.length==0){
        filterSection.innerHTML=`
        <div class="flex flex-col  items-center border border-[#e6e7e9] rounded justify-center mt-[60px]">
                <img src="jobs.png" alt="empty" class="mt-[111px]">
                <p class="text-[20px] font-bold text-blue-950 mt-4">No Jobs Available</p>
                <p class="text-gray-400 mt-2 mb-[111px]">Check back soon for new job opportunities.</p>
            </div>
        `
        return;
        
    }
    filterSection.innerHTML = ""
    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'rounded-[8px] border mt-[16px] space-y-[10px] p-[24px]'
        div.innerHTML = `
        <div class="flex justify-between ">
                    <p class="text-blue-950 text-[18px] font-bold company-name">${interview.companyName}</p>
                    <img src="Vector.png" alt="" style="border: 1px solid #e6e7e9;" class="rounded-full p-[10px]">
                </div>
                <p class="text-[#64748B] position-name">${interview.positionName}</p>
                <div class="flex gap-3">
                    <p class="site">${interview.siteName}</p>
                    <p class="time">${interview.time}</p>
                    <p class="salary">${interview.salary}</p>
                </div>
                <div>
                    <button class="status-btn bg-blue-100 px-[12px] py-[8px] rounded">${interview.status}</button>
                </div>
                <p class="text-[#323B49] notes">${interview.notes}</p>
                <div>
                    <button class="interview-btn btn btn-outline btn-success mr-[8px]">INTERVIEW</button>
                    <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                </div>
            </div>
        ` 
        filterSection.appendChild(div);
    }
}

function newReject (){
    filterSection.innerHTML='';
    if(rejectedList.length==0){
        filterSection.innerHTML=`
        <div class="flex flex-col  items-center border border-[#e6e7e9] rounded justify-center mt-[60px]">
                <img src="jobs.png" alt="empty" class="mt-[111px]">
                <p class="text-[20px] font-bold text-blue-950 mt-4">No Jobs Available</p>
                <p class="text-gray-400 mt-2 mb-[111px]">Check back soon for new job opportunities.</p>
            </div>
        `
        return;
        
    }
    filterSection.innerHTML = "";
    for(let rejected of rejectedList){
        let div = document.createElement('div');
        div.className="rounded-[8px] border mt-[16px] space-y-[10px] p-[24px]"
        div.innerHTML = `
        <div class="flex justify-between ">
                    <p class="text-blue-950 text-[18px] font-bold company-name">${rejected.companyName}</p>
                    <img src="Vector.png" alt="" style="border: 1px solid #e6e7e9;" class="rounded-full p-[10px]">
                </div>
                <p class="text-[#64748B] position-name">${rejected.positionName}</p>
                <div class="flex gap-3">
                    <p class="site">${rejected.siteName}</p>
                    <p class="time">${rejected.time}</p>
                    <p class="salary">${rejected.salary}</p>
                </div>
                <div>
                    <button class="status-btn bg-blue-100 px-[12px] py-[8px] rounded">${rejected.status}</button>
                </div>
                <p class="text-[#323B49] notes">${rejected.notes}</p>
                <div>
                    <button class="interview-btn btn btn-outline btn-success mr-[8px]">INTERVIEW</button>
                    <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                </div>
            </div>
        `
        filterSection.appendChild(div)
    }
}