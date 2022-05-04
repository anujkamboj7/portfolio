import { MdOutlineLocationOn } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
const Contact = () => {
  const recaptchaRef = useRef();
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  // function
  const onChange = (value) => {
    setToken(value);
    setError("");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (token) {
      fetch("/api/nodemailer", {
        method: "post",
        body: JSON.stringify(data),
      });

      reset();
      recaptchaRef.current.reset();
      setToken("");
      toast.success("Message Successfully Sent", {
        duration: 3000,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      setError("Please check the reCAPTCHA");
    }
  };

  return (
    <div className='container mx-auto py-10 lg:py-14' name='contact'>
      <h2 className='section__heading'>Contact</h2>
      <div className='flex flex-col md:flex-row gap-y-12 gap-x-6 md-gap-y-0'>
        <div className='space-y-6 md:pt-8 md:flex-[0.45] lg:flex-[0.4]'>
          <p className='flex items-center gap-x-4'>
            <span>
              <MdOutlineLocationOn className='w-7 h-7 text-primary' />
            </span>
            <span className='text-heading_dark'>Delhi, India</span>
          </p>

          <a
            href='mailto:business.ak77@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='text-heading_dark hover:underline flex items-center gap-x-4'
          >
            <span>
              <VscMail className='w-7 h-7 text-primary' />
            </span>
            business.ak77@gmail.com
          </a>
        </div>
        <div className='md:flex-[0.55] lg:flex-[0.4]'>
          <h2 className='section__heading'>How can I Help You?</h2>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='space-y-1'>
              <input
                type='text'
                placeholder='Full Name'
                className='input__dark'
                autoComplete='given-name'
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Full name must be 3 characters long",
                  },
                })}
              />
              {errors.fullName && (
                <p className='text-red-600 pl-1'>{errors.fullName.message}</p>
              )}
            </div>
            <div className='space-y-1'>
              <input
                type='email'
                placeholder='Email Address'
                className='input__dark'
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a right email address",
                  },
                })}
              />
              {errors.email && (
                <p className='text-red-600 pl-1'>{errors.email.message}</p>
              )}
            </div>
            <div className='space-y-1'>
              <input
                type='text'
                placeholder='Subject'
                className='input__dark'
                {...register("subject", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
              {errors.subject && (
                <p className='text-red-600 pl-1'>{errors.subject.message}</p>
              )}
            </div>
            <div className='space-y-1'>
              <textarea
                placeholder='Message'
                className='w-full h-[160px] input__dark resize-none'
                {...register("message", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className='text-red-600 pl-1'>{errors.message.message}</p>
              )}
            </div>
            <div className='space-y-1 w-full'>
              <ReCAPTCHA
                theme='dark'
                ref={recaptchaRef}
                sitekey='6LdYX1seAAAAADHjZiAkJwjI1j4Z4i2Zj1vtUa7X'
                onChange={onChange}
              />
              {error && <p className='text-red-600 pl-1'>{error}</p>}
              <div>
                <button
                  disabled={!isDirty}
                  type='submit'
                  className='px-8 py-2.5  mt-4 disabled:opacity-60 disabled:cursor-not-allowed rounded-full bg-cta_dark text-links_dark  border-2 border-base_dark'
                >
                  Send Message
                </button>
              </div>
            </div>

            <Toaster />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
