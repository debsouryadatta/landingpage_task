'use client';
import { Play } from 'lucide-react';
import { useState } from 'react';

const RequestConsideration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cityOfInterest: '',
    state: '',
    zip: '',
    interestReason: '',
    requirement: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      cityOfInterest: '',
      state: '',
      zip: '',
      interestReason: '',
      requirement: '',
    });
  };

  return (
    <div className="w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-center gap-1 my-8 ">
      <h1 className="text-2xl md:text-3xl font-[800] text-[#4A4A4A] text-center  md:tracking-widest  md:leading-[0.8] ">
        REQUEST FOR CONSIDERATION
      </h1>
      <p className="text-[#474747] font-semibold text-[9px] md:text-sm text-center md:tracking-tight mt-2 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-[#474747] font-semibold text-[9px] md:text-sm text-center md:tracking-tight ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form className="w-full  bg-white py-4 " onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col w-full gap-1">
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME *"
              className="bg-[#AEAEAE] px-2 text-white py-2  placeholder:text-white text-sm"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS *"
              className="bg-[#AEAEAE] px-2 text-white py-2  placeholder:text-white text-sm"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cityOfInterest"
              placeholder="CITY OF INTEREST *"
              className="bg-[#AEAEAE] px-2 text-white py-2  placeholder:text-white text-sm"
              value={formData.cityOfInterest}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME *"
              className="bg-[#AEAEAE] px-2 text-white py-2  placeholder:text-white text-sm"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="PHONE NUMBER *"
              className="bg-[#AEAEAE] px-2 text-white py-2  placeholder:text-white text-sm"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 w-full gap-1">
              <div className="relative">
                <button
                  type="button"
                  className="select_box bg-[#AEAEAE] px-2 text-white py-2 flex justify-between items-center col-span-1 placeholder:text-white text-sm w-full text-left"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {formData.state ? formData.state : 'STATE *'}
                  {dropdownOpen ? (
                    <Play className="text-white size-4 fill-white -rotate-90" />
                  ) : (
                    <Play className="text-white size-4 fill-white rotate-90" />
                  )}
                </button>
                {dropdownOpen && (
                  <ul className="absolute bg-[#AEAEAE] w-full mt-1 rounded-md shadow-lg z-10">
                    <li
                      className="px-2 py-2 text-white text-sm cursor-pointer"
                      onClick={() => {
                        handleChange({ target: { name: 'state', value: '' } });
                        setDropdownOpen(false);
                      }}
                    >
                      STATE *
                    </li>
                    <li
                      className="px-2 py-2 text-white text-sm cursor-pointer"
                      onClick={() => {
                        handleChange({
                          target: { name: 'state', value: 'CA' },
                        });
                        setDropdownOpen(false);
                      }}
                    >
                      California
                    </li>
                    <li
                      className="px-2 py-2 text-white text-sm cursor-pointer"
                      onClick={() => {
                        handleChange({
                          target: { name: 'state', value: 'NY' },
                        });
                        setDropdownOpen(false);
                      }}
                    >
                      New York
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative">
                <button
                  type="button"
                  className="select_box bg-[#AEAEAE] px-2 text-white py-2 flex justify-between items-center col-span-1 placeholder:text-white text-sm w-full text-left"
                  onClick={() => setDropdownOpen1(!dropdownOpen1)}
                >
                  {formData.zip ? formData.zip : 'ZIP *'}
                  {dropdownOpen1 ? (
                    <Play className="text-white size-4 fill-white -rotate-90" />
                  ) : (
                    <Play className="text-white size-4 fill-white  rotate-90" />
                  )}
                </button>
                {dropdownOpen1 && (
                  <ul className="absolute bg-[#AEAEAE] w-full mt-1 rounded-md shadow-lg z-10">
                    <li
                      className="px-2 py-2 text-white text-sm cursor-pointer"
                      onClick={() => {
                        handleChange({ target: { name: 'zip', value: '' } });
                        setDropdownOpen1(false);
                      }}
                    >
                      ZIP *
                    </li>
                    <li
                      className="px-2 py-2 text-white text-sm cursor-pointer"
                      onClick={() => {
                        handleChange({
                          target: { name: 'zip', value: '4561' },
                        });
                        setDropdownOpen1(false);
                      }}
                    >
                      4561
                    </li>
                    <li
                      className="px-2 py-2 text-white text-sm cursor-pointer"
                      onClick={() => {
                        handleChange({
                          target: { name: 'zip', value: '1234' },
                        });
                        setDropdownOpen1(false);
                      }}
                    >
                      1234
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="w-full h-full flex justify-between flex-col ">
            <textarea
              name="interestReason"
              placeholder="WHY ARE YOU INTERESTED IN OWNING?"
              className="w-full h-[65%]  bg-[#AEAEAE] px-2 text-white py-2  placeholder:text-white text-sm "
              value={formData.interestReason}
              onChange={handleChange}
            ></textarea>

            <div className=" flex  items-center w-full justify-between">
              <span className="text-[10px] text-clip w-[70%]   text-[#4A4A4A]">
                The minimum cash you will need (without the bank) is 50K. Do you
                meet this requirement?
              </span>
              <div className="flex items-center  w-[30%] justify-center gap-[8px] ">
                <label className="flex items-center flex-row-reverse text-[#4A4A4A] text-[10px]">
                  <input
                    type="radio"
                    name="requirement"
                    value="yes"
                    className="ml-[2px] w-5 h-5"
                    checked={formData.requirement === 'yes'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="flex items-center flex-row-reverse text-[#4A4A4A] text-[10px]">
                  <input
                    type="radio"
                    name="requirement"
                    value="no"
                    className="ml-[2px] w-5 h-5"
                    checked={formData.requirement === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <button
            type="submit"
            className="bg-[#4A4A4A] text-white py-[1px] px-5 rounded-full text-xl font-light "
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export { RequestConsideration };
