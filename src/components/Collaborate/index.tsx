import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CustomSelect from "../Select";
import { LuCircleCheckBig, LuLoaderCircle } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  idea: string;
  message: string;
}

export default function CollaboratePanel({ isOpen, onClose }: Props) {
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    idea: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Auto-close panel after sending
  useEffect(() => {
    if (!emailSent) return;

    const timer = setTimeout(() => {
      onClose();
      setEmailSent(false);
      setFormData({ name: "", email: "", idea: "", message: "" });
    }, 1500);

    return () => clearTimeout(timer);
  }, [emailSent, onClose]);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => {
        setLoading(false);
        setEmailSent(false);
        return { error };
      })
      .finally(() => {
        setLoading(false);
        setEmailSent(false);
      });
    if (response?.emailSent) setEmailSent(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed bottom-0 left-0 right-0 z-50
                       bg-white/5 backdrop-blur-2xl md:backdrop-blur-3xl
                       border-t border-white/10
                       rounded-t-3xl
                       shadow-[0_-20px_60px_rgba(0,0,0,0.6)]
                       max-h-[85vh] overflow-hidden"
          >
            <div className="max-w-3xl mx-auto px-6 py-12 relative h-full flex flex-col justify-center">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition"
              >
                <IoCloseOutline size={24} />
              </button>
              <h2
                className={`text-3xl md:text-4xl font-semibold text-white mb-4 ${emailSent ? "text-center" : "text-left"}`}
              >
                {emailSent
                  ? "Thank you!"
                  : "Have an Idea ? Let’s Make It Real."}
              </h2>

              <p
                className={`text-white/60 mb-10 ${emailSent ? "text-center" : "text-left"}`}
              >
                {emailSent
                  ? "Your message has been sent successfully."
                  : "Great products start with clear ideas. Let’s define yours."}
              </p>

              <div className="relative h-[420px]">
                <AnimatePresence mode="wait">
                  {!emailSent ? (
                    <motion.form
                      key="form"
                      initial={{ transform: "translateY(40px)", opacity: 0 }}
                      animate={{ transform: "translateY(0px)", opacity: 1 }}
                      exit={{ transform: "translateY(40px)", opacity: 0 }}
                      transition={{
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.35,
                      }}
                      style={{ willChange: "transform, opacity" }}
                      className="space-y-6"
                      onSubmit={handleSend}
                    >
                      <Input
                        value={formData.name}
                        name="name"
                        placeholder="Your Name"
                        onChange={handleInputChange}
                      />
                      <Input
                        value={formData.email}
                        name="email"
                        placeholder="Your Email"
                        onChange={handleInputChange}
                      />
                      <CustomSelect
                        selected={formData.idea}
                        onSelect={(value) =>
                          setFormData({ ...formData, idea: value })
                        }
                      />
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about the project..."
                        className="w-full bg-white/5 border border-white/10
                                   rounded-xl px-4 py-3
                                   text-white placeholder-white/40
                                   focus:outline-none focus:border-white/30
                                   focus:bg-white/10 transition resize-none"
                      />

                      <button
                        type="submit"
                        disabled={
                          Object.values(formData).every((v) => !v) || loading
                        }
                        className="w-full flex items-center justify-center gap-2 disabled:cursor-not-allowed py-3 rounded-xl
                                   bg-gradient-to-r from-indigo-500 to-amber-400
                                   text-black font-semibold
                                   hover:opacity-90 transition"
                      >
                        {loading ? "Sending Mail" : "Begin project"}
                        {loading && (
                          <LuLoaderCircle className="w-5 h-5 animate-spin text-black" />
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="tick"
                      initial={{ transform: "translateY(40px)", opacity: 0 }}
                      animate={{ transform: "translateY(0px)", opacity: 1 }}
                      exit={{ transform: "translateY(-40px)", opacity: 0 }}
                      transition={{
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.35,
                      }}
                      style={{ willChange: "transform, opacity" }}
                      className="flex justify-center items-center py-20"
                    >
                      <LuCircleCheckBig className="text-green-400 w-24 h-24" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const Input = ({
  value,
  onChange,
  name,
  placeholder,
}: {
  value: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className="w-full bg-white/5 border border-white/10
                 rounded-xl px-4 py-3
                 text-white placeholder-white/40
                 focus:outline-none focus:border-white/30
                 focus:bg-white/10 transition"
    />
  );
};
