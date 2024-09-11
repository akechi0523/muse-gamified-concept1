
import Slider from "../components/slider";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon1 from "../assets/img/icons/income.svg";
import icon2 from "../assets/img/icons/filing-status.svg";
import icon3 from "../assets/img/icons/adjustments.svg";
import icon4 from "../assets/img/icons/outcome.svg";
import back from "../assets/img/icons/return-back-button.svg";


const Scenario = ({id, title, income, filing, adjustment, outcome}) => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
    if (step === 0){
      navigate('/');
    }
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <ChakraProvider>
      {/**********HEADER***********/}
      <div>
        <div className="flex flex-row">
          <hr
            className={`w-[25%] h-2 ${
              step === 0 ? "bg-[#4570EA] rounded-full" : "bg-[#DFDFDF]"
            } border-0`}
          />
          <hr
            className={`w-[25%] h-2 ${
              step === 1 ? "bg-[#4570EA] rounded-full" : "bg-[#DFDFDF]"
            } border-0`}
          />
          <hr
            className={`w-[25%] h-2 ${
              step === 2 ? "bg-[#4570EA] rounded-full" : "bg-[#DFDFDF]"
            } border-0`}
          />
          <hr
            className={`w-[25%] h-2 ${
              step === 3 ? "bg-[#4570EA] rounded-full" : "bg-[#DFDFDF]"
            } border-0`}
          />
        </div>
        <div className="relative w-full py-10 text-center">
          <div className="absolute top-10 left-20 cursor-pointer" onClick={handleBack}>
            <img src={back} alt="back" />
          </div>
          <div className="text-xl font-semibold text-[#4570EA] mb-2">
            Scenario {id} of 30
          </div>
          <div className="text-4xl font-bold">
            {title}
          </div>
        </div>
      </div>

      <div className={`w-full ${id===22 ? "h-[300px]" : "h-[300px]"} flex justify-center`}>
        <div className="flex flex-col gap-6">
          {/**********INCOME***********/}
          {step===0 && 
            <>
              <div className="flex flex-col items-center gap-2">
                <img src={icon1} alt="icon-income" />
                <div className="text-3xl font-semibold text-[#4570EA]">Income</div>
              </div>
              <div className="flex justify-center items-center gap-10">
                <div>
                  {income.primary.label != null && <div className="text-md text-[#4570EA] font-semibold text-center mb-2">{income.primary.label}</div>}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div className="relative">
                      <button className="w-[180px] py-2 rounded-full text-[22px] font-semibold text-[#5D87FF] border-2 border-[#5D87FF] hover:bg-[#5D87FF] hover:text-white">
                        {income.primary.option1.text}
                      </button>
                      {income.primary.option1.label != null &&<div className="absolute text-[#5D87FF] text-[10px] right-4 pt-1">{income.primary.option1.label}</div>}
                    </div>
                    <div className="relative">
                      <button className="w-[180px] py-2 rounded-full text-[22px] font-semibold text-[#FFAE1F] border-2 border-[#FFAE1F] hover:bg-[#FFAE1F] hover:text-white">
                        {income.primary.option2.text}
                      </button>
                      {income.primary.option2.label != null &&<div className="absolute text-[#FFAE1F] text-[10px] right-4 pt-1">{income.primary.option2.label}</div>}
                    </div>
                    <div className="relative">
                      <button className="w-[180px] py-2 rounded-full text-[22px] font-semibold text-[#FA896B] border-2 border-[#FA896B] hover:bg-[#FA896B] hover:text-white">
                        {income.primary.option3.text}
                      </button>
                      {income.primary.option3.label != null &&<div className="absolute text-[#FA896B] text-[10px] right-4 pt-1">{income.primary.option3.label}</div>}
                    </div>
                    <div className="relative">
                      <button className="w-[180px] py-2 rounded-full text-[22px] font-semibold text-[#13DEB9] border-2 border-[#13DEB9] hover:bg-[#13DEB9] hover:text-white">
                        {income.primary.option4.text}
                      </button>
                      {income.primary.option4.label != null &&<div className="absolute text-[#13DEB9] text-[10px] right-4 pt-1">{income.primary.option4.label}</div>}
                    </div>
                  </div>
                </div>
                {income.isMultiple &&<div>
                  {income.secondary.label != null && <div className="text-md text-[#4570EA] font-semibold text-center mb-2">{income.secondary.label}</div>}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div className="relative">
                      <button className="w-[180px] py-2 rounded-full text-[22px] font-semibold text-[#5D87FF] border-2 border-[#5D87FF] hover:bg-[#5D87FF] hover:text-white">
                        {income.secondary.option1.text}
                      </button>
                      {income.secondary.option1.label != null &&<div className="absolute text-[#5D87FF] text-[10px] right-4 pt-1">{income.secondary.option1.label}</div>}
                    </div>
                    <div className="relative">
                      <button className="w-[180px] py-2 rounded-full text-[22px] font-semibold text-[#FFAE1F] border-2 border-[#FFAE1F] hover:bg-[#FFAE1F] hover:text-white">
                        {income.secondary.option2.text}
                      </button>
                      {income.secondary.option2.label != null &&<div className="absolute text-[#FFAE1F] text-[10px] right-4 pt-1">{income.secondary.option2.label}</div>}
                    </div>
                    <div className="relative">
                      <button className="w-[180px] py-2 rounded-full text-[22px] font-semibold text-[#FA896B] border-2 border-[#FA896B] hover:bg-[#FA896B] hover:text-white">
                        {income.secondary.option3.text}
                      </button>
                      {income.secondary.option3.label != null &&<div className="absolute text-[#FA896B] text-[10px] right-4 pt-1">{income.secondary.option3.label}</div>}
                    </div>
                    <div className="relative">
                      <button className="w-[180px] py-2 rounded-full text-[22px] font-semibold text-[#13DEB9] border-2 border-[#13DEB9] hover:bg-[#13DEB9] hover:text-white">
                        {income.secondary.option4.text}
                      </button>
                      {income.secondary.option4.label != null &&<div className="absolute text-[#13DEB9] text-[10px] right-4 pt-1">{income.secondary.option4.label}</div>}
                    </div>
                  </div>
                </div>}
              </div>
            </>
          }
          {/**********FILING STATUS***********/}
          {step===1 && 
            <>
              <div className="flex flex-col items-center gap-2">
                <img src={icon2} alt="icon-filing-status" />
                <div className="text-3xl font-semibold text-[#FA896B]">Filing Status</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <button className="w-[390px] h-[54px] leading-5 text-center text-md text-[#FA896B] hover:text-white hover:bg-[#FA896B] rounded-full border-2 border-[#FA896B]">
                  {filing.label}
                </button>
                {filing.label1 != null && 
                  <button className="w-[390px] h-[54px] leading-5 text-center text-md text-[#FFAE1F] hover:text-white hover:bg-[#FFAE1F] rounded-full border-2 border-[#FFAE1F]">
                    {filing.label1}
                  </button>
                }                
              </div>
            </>
          }
          {/**********ADJUSTMENT***********/}
          {step===2 && 
            <>
              <div className="flex flex-col items-center gap-2">
                <img src={icon3} alt="icon-adjustments" />
                <div className="text-3xl font-semibold text-[#FFAD1F]">Adjustments</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <button className="w-[390px] h-[54px] leading-5 text-center text-md text-[#FFAE1F] hover:text-white hover:bg-[#FFAE1F] rounded-full border-2 border-[#FFAE1F]">
                  {adjustment.label}
                </button>
                {adjustment.label1 != null && 
                  <button className="w-[390px] h-[54px] leading-5 text-center text-md text-[#FA896B] hover:text-white hover:bg-[#FA896B] rounded-full border-2 border-[#FA896B]">
                    {adjustment.label1}
                  </button>
                }                
              </div>
            </>
          }
          {/**********OUTCOME***********/}
          {step===3 && 
            <>
              <div className="flex flex-col items-center gap-2">
                <img src={icon4} alt="icon-income" />
                <div className="text-3xl font-semibold text-[#13DEB9]">Outcome</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <button className="w-[390px] h-[54px] leading-5 text-center text-md text-[#13DEB9] hover:text-white hover:bg-[#13DEB9] rounded-full border-2 border-[#13DEB9]">
                  {outcome.primary}
                </button>
                {outcome.isMultiple &&
                  <button className="w-[390px] h-[54px] leading-5 text-center text-md text-[#FFAE1F] hover:text-white hover:bg-[#FFAE1F] rounded-full border-2 border-[#FFAE1F]">
                    {outcome.secondary}
                  </button>
                }
                {outcome.third != null && 
                  <button className="w-[390px] h-[54px] leading-5 text-center text-md text-[#FA896B] hover:text-white hover:bg-[#FA896B] rounded-full border-2 border-[#FA896B]">
                    {outcome.third}
                  </button>
                }                
              </div>
            </>
          }
        </div>
      </div>
      {/**********FOOTER**************/}
      <div className="flex justify-center items-center py-8">
        <button className="text-white px-4 py-2 bg-[#5D87FF] rounded couser-pointer" onClick={handleNext}>
          { step < 3 ? "Continue" : "View My Results" } 
        </button>
      </div>
    </ChakraProvider>
  )
}

export default Scenario;