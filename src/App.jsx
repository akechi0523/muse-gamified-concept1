import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/Home";
import Scenario from "./pages/Scenario";
import img1 from "./assets/img/illustrations/1.png";
import img2 from "./assets/img/illustrations/2.png";
import img3 from "./assets/img/illustrations/3.png";
import img4 from "./assets/img/illustrations/4.png";
import img5 from "./assets/img/illustrations/5.png";
import img6 from "./assets/img/illustrations/6.png";
import img7 from "./assets/img/illustrations/7.png";
import img8 from "./assets/img/illustrations/8.png";
import img9 from "./assets/img/illustrations/9.png";
import img10 from "./assets/img/illustrations/10.png";
import img11 from "./assets/img/illustrations/11.png";
import img12 from "./assets/img/illustrations/12.png";
import img13 from "./assets/img/illustrations/13.png";
import img14 from "./assets/img/illustrations/14.png";
import img15 from "./assets/img/illustrations/15.png";
import '@fontsource-variable/plus-jakarta-sans';
import { label } from "framer-motion/client";
export default function App() {
  const data = [
    {
      title: "Young Professional, Single, One Job",
      income: {
        primary: {
          option1: {
            text: "$0k-$15k",
          },
          option2: {
            text: "$15k-$30k",
          },
          option3: {
            text: "$30k-$40k",
          },
          option4: {
            text: "$40k-$50k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Standard Deducation",
        secondary: "No Additional withholding",
        image: img2
      }
    },
    {
      title: "Dual-Income No Kids (DINK), Married",
      income: {
        isMultiple: true,
        primary: {
          label: "Primary",
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$30k",
          },
          option3: {
            text: "$30k-$60k",
          },
          option4: {
            text: "$60k-$70k",
          },
        },
        secondary: {
          label: "Spouse",
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$30k",
          },
          option3: {
            text: "$30k-$60k",
          },
          option4: {
            text: "$60k-$70k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        primary: 'Withhold at higher single rate to avoid underpayment',
        image: img2
      }
    },
    {
      title: "Single Parent with Two Kids",
      income: {
        primary: {
          option1: {
            text: "$0k-$15k",
          },
          option2: {
            text: "$15k-$30k",
          },
          option3: {
            text: "$30k-$40k",
          },
          option4: {
            text: "$40k-$45k",
          },
        },
      },
      filing: {
        label: "Head of Household",
        image: img14,
      },
      adjustment: {
        label: "Child Tax Credit for two kids",
        image: img3
      },
      outcome: {
        primary: "Lower withholding due to child credits",
        image: img2
      }
    },
    {
      title: "Married, Sole Earner, Three Kids",
      income: {
        primary: {
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$30k",
          },
          option3: {
            text: "$30k-$50k",
          },
          option4: {
            text: "$50k-$70k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Child Tax Credit for three kids",
        image: img12
      },
      outcome: {
        primary: "Reduced withholding owing to multiple child credits",
        image: img2
      }
    },
    {
      title: "High-Income Single, Multiple Jobs",
      income: {
        isMultiple: true,
        primary: {
          label: "Primary",
          option1: {
            text: "$0k-$30k",
          },
          option2: {
            text: "$30k-$60k",
          },
          option3: {
            text: "$60k-$90k",
          },
          option4: {
            text: "$90k-$120k",
          },
        },
        secondary: {
          label: "Secondary",
          option1: {
            text: "$0k-$5k",
          },
          option2: {
            text: "$5k-$10k",
          },
          option3: {
            text: "$10k-$20k",
          },
          option4: {
            text: "$20k-$30k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Additional withholding for second job",
        image: img10
      },
      outcome: {
        primary: "Increased withholding to cover tax liability from both jobs",
        image: img2
      }
    },
    {
      title: "Retired Couple, Pension, and Social Security",
      income: {
        primary: {
          option1: {
            text: "$0k-$5k",
          },
          option2: {
            text: "$5k-$15k",
          },
          option3: {
            text: "$15k-$25k",
          },
          option4: {
            text: "$25k-$35k",
            label: "Social Security benefits"
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Withholding from pension only",
        image: img10
      },
      outcome: {
        primary: "Adjusted to avoid overpaying due to Social Security being partially taxable",
        image: img2
      }
    },
    {
      title: "Freelancer with Variable Income",
      income: {
        primary: {
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$40k-$80k",
          },
          option3: {
            text: "$80k-$120k",
          },
          option4: {
            text: "$120k-$140k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Quarterly estimated tax payments",
        image: img10
      },
      outcome: {
        primary: "Adjustments to avoid underpayment penalties due to variable income",
        image: img2
      }
    },
    {
      title: "Married, Both High Earners, No Kids",
      income: {
        isMultiple: true,
        primary: {
          label: "Primary",
          option1: {
            text: "$0k-$40k",
          },
          option2: {
            text: "$40k-$80k",
          },
          option3: {
            text: "$80k-$120k",
          },
          option4: {
            text: "$120k-$140k",
          },
        },
        secondary: {
          label: "Spouse",
          option1: {
            text: "$0k-$40k",
          },
          option2: {
            text: "$40k-$80k",
          },
          option3: {
            text: "$80k-$120k",
          },
          option4: {
            text: "$120k-$140k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Additional withholding on higher-earning spouse's income",
        image: img10
      },
      outcome: {
        primary: "Prevent underpayment due to high combined income.",
        image: img2
      }
    },
    {
      title: "Married, One Working, One Unemployed",
      income: {
        primary: {
          option1: {
            text: "$0k-$15k",
          },
          option2: {
            text: "$15k-$30k",
          },
          option3: {
            text: "$30k-$40k",
          },
          option4: {
            text: "$40k-$50k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Standard withholding",
        secondary: "No additional income to consider",
        image: img2
      }
    },
    {
      title: "Single, High Earner, Investment Income",
      income: {
        primary: {
          option1: {
            text: "$0k-$50k",
          },
          option2: {
            text: "$50k-$100k",
          },
          option3: {
            text: "$100k-$150k",
          },
          option4: {
            text: "$150k-$200k",
            label: "+ Dividends $20,000/year"
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Additional withholding for investment income",
        image: img7
      },
      outcome: {
        primary: "Higher withholding to cover taxes on both salary and investment income",
        image: img2
      }
    },
    {
      title: "College Student Working Part-Time",
      income: {
        primary: {
          option1: {
            text: "$0k-$3k",
          },
          option2: {
            text: "$3k-$6k",
          },
          option3: {
            text: "$6k-$12k",
          },
          option4: {
            text: "$12k-$15k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Likely no tax liability",
        secondary: "Minimal or no withholding required",
        image: img2
      }
    },
    {
      title: "Married with Non-Working Spouse, Two Kids",
      income: {
        primary: {
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$40k",
          },
          option3: {
            text: "$40k-$70k",
          },
          option4: {
            text: "$70k-$85k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Child Tax Credit for two kids",
        image: img3
      },
      outcome: {
        primary: "Adjusted withholding for family size and child credits.",
        image: img2
      }
    },
    {
      title: "Divorced, Paying Alimony",
      income: {
        isMultiple: true,
        primary: {
          label: "Primary",
          option1: {
            text: "$0k-$25k",
          },
          option2: {
            text: "$25k-$50k",
          },
          option3: {
            text: "$50k-$75k",
          },
          option4: {
            text: "$75k-$100k",
          },
        },
        secondary: {
          label: "Alimony Payments",
          option1: {
            text: "$0k-$3k",
          },
          option2: {
            text: "$3k-$6k",
          },
          option3: {
            text: "$6k-$12k",
          },
          option4: {
            text: "$12k-$15k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Adjust for alimony payments",
        image: img10
      },
      outcome: {
        primary: "Increased withholding to cover alimony payments",
        image: img2
      }
    },
    {
      title: "Married, Both Part-Time Jobs, One Child",
      income: {
        isMultiple: true,
        primary: {
          label: "Primary",
          option1: {
            text: "$0k-$5k",
          },
          option2: {
            text: "$5k-$10k",
          },
          option3: {
            text: "$10k-$15k",
          },
          option4: {
            text: "$15k-$25k",
          },
        },
        secondary: {
          label: "Spouse",
          option1: {
            text: "$0k-$5k",
          },
          option2: {
            text: "$5k-$10k",
          },
          option3: {
            text: "$10k-$15k",
          },
          option4: {
            text: "$15k-$20k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Child Tax Credit for one child",
        image: img11
      },
      outcome: {
        primary: "Lower withholding due to lower combined income and child credit",
        image: img2
      }
    },
    {
      title: "Widowed Senior with Fixed Income",
      income: {
        primary: {
          option1: {
            text: "$0k-$5k",
          },
          option2: {
            text: "$5k-$10k",
          },
          option3: {
            text: "$10k-$20k",
          },
          option4: {
            text: "$20k-$30k",
            label: "(Pension and Social Security)",
          },
        },
      },
      filing: {
        label: "Widower",
        image: img6,
      },
      adjustment: {
        label: "Minimal withholding from pension",
        image: img8
      },
      outcome: {
        primary: "Adjusted to account for non-taxable portion of Social Security",
        image: img2
      }
    },
    {
      title: "Young Couple, Newly Married",
      income: {
        primary: {
          option1: {
            text: "$0k-$10k",
          },
          option2: {
            text: "$10k-$20k",
          },
          option3: {
            text: "$20k-$30k",
          },
          option4: {
            text: "$30k-$40k",
            label: "(Each)",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Standard deduction",
        secondary: "Typical withholding",
        image: img2
      }
    },
    {
      title: "Single, Owning Rental Properties",
      income: {
        primary: {
          option1: {
            text: "$0-$200",
          },
          option2: {
            text: "$200-$600",
          },
          option3: {
            text: "$600-$900",
          },
          option4: {
            text: "$900-$1200",
            label: "+$24,000/year rental income",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Additional withholding for rental income",
        image: img15
      },
      outcome: {
        primary: 'Increased withholding to cover tax liability from rental income',
        image: img2
      }
    },
    {
      title: "Married, One Spouse Self-Employed",
      income: {
        isMultiple: true,
        primary: {
          label: "(Employed Spouse)",
          option1: {
            text: "$0k-$15k",
          },
          option2: {
            text: "$15k-$30k",
          },
          option3: {
            text: "$30k-$40k",
          },
          option4: {
            text: "$40k-$50k",
          },
        },
        secondary: {
          label: "(Self-Employed)",
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$30k",
          },
          option3: {
            text: "$30k-$60k",
          },
          option4: {
            text: "$60k-$70k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Quarterly estimated tax payments for self-employed spouse",
        image: img5
      },
      outcome: {
        primary: "Combination of withholding and estimated payments to cover total tax liability",
        image: img2
      }
    },
    {
      title: "Immigrant on Work Visa, Single",
      income: {
        primary: {
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$30k",
          },
          option3: {
            text: "$30k-$60k",
          },
          option4: {
            text: "$60k-$70k",
          },
        },
      },
      filing: {
        label: "Single",
        label1: "Non-Resident Alien",
        image: img1,
      },
      adjustment: {
        label: "Specific non-resident withholding rates",
        image: img10
      },
      outcome: {
        primary: "Adjusted for non-resident tax status",
        image: img2
      }
    },
    {
      title: "Young Professional, Paying Student Loans",
      income: {
        primary: {
          option1: {
            text: "$0k-$15k",
          },
          option2: {
            text: "$15k-$30k",
          },
          option3: {
            text: "$30k-$45k",
          },
          option4: {
            text: "$45k-$55k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Consideration for student loan interest deduction",
        image: img9
      },
      outcome: {
        primary: "Slight adjustment to withholding to account for deductible student loan interest",
        image: img2
      }
    },
    {
      title: "Recent College Graduate, First Job",
      income: {
        primary: {
          option1: {
            text: "$0k-$15k",
          },
          option2: {
            text: "$15k-$30k",
          },
          option3: {
            text: "$30k-$40k",
          },
          option4: {
            text: "$40k-$45k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Standard single withholding",
        secondary: "No adjustments",
        third: "Ideal for a simple tax situationding",
        image: img2
      }
    },
    {
      title: "Married Couple, Dual Income, No Kids",
      income: {
        isMultiple: true,
        primary: {
          label: "(Spouse A)",
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$30k",
          },
          option3: {
            text: "$30k-$60k",
          },
          option4: {
            text: "$60k-$70k",
          },
        },
        secondary: {
          label: "(Spouse B)",
          option1: {
            text: "$0k-$15k",
          },
          option2: {
            text: "$15k-$30k",
          },
          option3: {
            text: "$30k-$45k",
          },
          option4: {
            text: "$45k-$55k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        primary: "Standard withholding for a dual-income married couple without dependents",
        image: img2
      }
    },
    {
      title: "Single Parent with Two Children",
      income: {
        primary: {
          option1: {
            text: "$0k-$15k",
          },
          option2: {
            text: "$15k-$30k",
          },
          option3: {
            text: "$30k-$40k",
          },
          option4: {
            text: "$40k-$50k",
          },
        },
      },
      filing: {
        label: "Head of Household",
        image: img14,
      },
      adjustment: {
        label: "Claiming two child tax credits",
        image: img3
      },
      outcome: {
        isMultiple: true,
        primary: "Reduced withholding due to child tax credits",
        secondary: "Benefitting from head of household status",
        image: img2
      }
    },
    {
      title: "High-Income Single Professional",
      income: {
        primary: {
          option1: {
            text: "$0k-$30k",
          },
          option2: {
            text: "$30k-$60k",
          },
          option3: {
            text: "$30k-$90k",
          },
          option4: {
            text: "$90k-$120k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Additional withholding to cover potential higher tax bracket",
        image: img10
      },
      outcome: {
        primary: "Higher withholding to avoid underpayment due to being in a higher tax bracket",
        image: img2
      }
    },
    {
      title: "Retired Couple with Pension and Social Security",
      income: {
        primary: {
          option1: {
            text: "$0k-$10k",
          },
          option2: {
            text: "$10k-$20k",
          },
          option3: {
            text: "$20k-$30k",
          },
          option4: {
            text: "$30k-$40k",
            label: "Social Security benefits",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Adjusting for Social Security being partially taxable",
        image: img10
      },
      outcome: {
        primary: "Withholding from pension to cover taxes, considering non-taxable portion of Social Security",
        image: img2
      }
    },
    {
      title: "Newly Married Couple, Combining Finances",
      income: {
        primary: {
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$30k",
          },
          option3: {
            text: "$30k-$50k",
          },
          option4: {
            text: "$60k-$70k",
            label: "(Combined)",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Adjusting to joint income and tax brackets",
        image: img10
      },
      outcome: {
        primary: "Reevaluation of withholding due to marriage and combined income",
        image: img2
      }
    },
    {
      title: "Single, Freelance Graphic Designer",
      income: {
        primary: {
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$30k",
          },
          option3: {
            text: "$30k-$50k",
          },
          option4: {
            text: "$60k-$70k",
            label: "Varies, approx.",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Quarterly estimated tax payments due to variable income",
        image: img10
      },
      outcome: {
        primary: "Estimated payments calculated based on variable income to avoid underpayment penalties",
        image: img2
      }
    },
    {
      title: "Married with One Spouse in School, One Working",
      income: {
        primary: {
          option1: {
            text: "$0k-$5k",
          },
          option2: {
            text: "$5k-$15k",
          },
          option3: {
            text: "$15k-$25k",
          },
          option4: {
            text: "$25k-$35k",
          },
        },
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Potential education credits",
        image: img9
      },
      outcome: {
        primary: "Lower withholding considering education tax benefits",
        image: img2
      }
    },
    {
      title: "Divorced, Paying Alimony, Two Kids",
      income: {
        isMultiple: true,
        primary: {
          label: "Income",
          option1: {
            text: "$0k-$20k",
          },
          option2: {
            text: "$20k-$40k",
          },
          option3: {
            text: "$40k-$70k",
          },
          option4: {
            text: "$70k-$85k",
          },
        },
        secondary: {
          label: "Alimony Paid", 
          option1: {
            text: "$0-$200",
          },
          option2: {
            text: "$200-$600",
          },
          option3: {
            text: "$600-$900",
          },
          option4: {
            text: "$900-$1200",
          },
        },
      },
      filing: {
        label: "Head of Household",
        image: img13,
      },
      adjustment: {
        label: "Adjusting for alimony payments",
        label1: "Claiming child tax credits",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Increased withholding for alimony",
        secondary: "Offset by child tax credits",
        image: img2
      }
    },
    {
      title: "Mid-Career Professional, Maximizing Retirement Savings",
      income: {
        primary: {
          option1: {
            text: "$0k-$25k",
          },
          option2: {
            text: "$25k-$50k",
          },
          option3: {
            text: "$50k-$75k",
          },
          option4: {
            text: "$75k-$100k",
          },
        },
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Maximizing 401(k) contributions",
        image: img10
      },
      outcome: {
        primary: "Adjust withholding considering reduced taxable income due to 401(k) contributions",
        image: img2
      }
    },
  ]

  return (
    <div className="text-primary" style={{ fontFamily: 'Plus Jakarta Sans Variable, sans-serif' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {data.map((item, index) => (
          <Route 
            key={index} 
            path={`/scenario${index + 1}`} 
            element={
              <Scenario 
                id={index + 1} 
                title={item.title} 
                income={item.income} 
                filing={item.filing} 
                adjustment={item.adjustment} 
                outcome={item.outcome} 
              />
             } 
          />
        ))}
      </Routes>
    </div>
  )
}