"use client"
import React, {useState} from "react"
import { HiArrowRight } from "react-icons/hi2";
 
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { boolean, z } from "zod"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
 
const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]
 
const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
})

type Props = {}

function SiteWebForm({}: Props) {

    const [openEcommerce, setOpenEcommerce] = useState<boolean>(false)


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      })
     
      function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }

  return (
    <div className="mt-8">
      <div className="flex mb-6 gap-x-4">
        <button 
        className={cn("border-shikam-clair border-2 rounded-full px-4 py-2 text-sm font-light", !openEcommerce && "bg-shikam-clair text-white")}
        onClick={() => setOpenEcommerce(false)}
        >
          Site web vitrine
        </button>
        <button 
        className={cn("border-shikam-clair border-2 rounded-full px-4 py-2 text-sm font-light", openEcommerce && "bg-shikam-clair text-white")}
        onClick={() => setOpenEcommerce(true)}
        >
          Site e-commerce
        </button>
      </div>
      {!openEcommerce ? (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                <FormItem className="flex flex-col">
                    <Popover>
                    <PopoverTrigger asChild>
                        <FormControl>
                        <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                            "max-w-md justify-between rounded-full h-12 bg-white border-0 text-lg shadow-light",
                            !field.value && "text-"
                            )}
                        >
                            {field.value
                            ? languages.find(
                                (language) => language.value === field.value
                                )?.label
                            : "Quelle est votre activité ?"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                        </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                            <CommandList>
                                {languages.map((language) => (
                                <CommandItem
                                    value={language.label}
                                    key={language.value}
                                    onSelect={() => {
                                    form.setValue("language", language.value)
                                    }}
                                >
                                    <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        language.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                    />
                                    {language.label}
                                </CommandItem>
                                ))}
                            </CommandList>
                        </CommandGroup>
                        </Command>
                    </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
                )}
            />
            <button type="submit" className="max-w-md rounded-full bg-shikam-degrade w-full py-3 text-white px-4 flex justify-between  hover:bg-shikam-degrade-fonce hover:text-white transition-all duration-75 ease-in-out">Estimez le prix de votre site web<HiArrowRight className="h-6 w-6 text-white"/></button>
            </form>
        </Form>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
              <FormItem className="flex flex-col">
                  <Popover>
                  <PopoverTrigger asChild>
                      <FormControl>
                      <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                          "max-w-md justify-between rounded-full h-12 bg-shikam-light border-0 text-lg shadow-[0 3px 24px rgb(0 0 0 / 10%)]",
                          !field.value && "text-"
                          )}
                      >
                          {field.value
                          ? languages.find(
                              (language) => language.value === field.value
                              )?.label
                          : "Quelle produit vendez-vous ?"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                      </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                      <Command>
                      <CommandInput placeholder="Search language..." />
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                          <CommandList>
                              {languages.map((language) => (
                              <CommandItem
                                  value={language.label}
                                  key={language.value}
                                  onSelect={() => {
                                  form.setValue("language", language.value)
                                  }}
                              >
                                  <Check
                                  className={cn(
                                      "mr-2 h-4 w-4",
                                      language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                  />
                                  {language.label}
                              </CommandItem>
                              ))}
                          </CommandList>
                      </CommandGroup>
                      </Command>
                  </PopoverContent>
                  </Popover>
                  <FormMessage />
              </FormItem>
              )}
          />
          <button type="submit" className="max-w-md rounded-full bg-shikam-normal w-full py-3 text-white px-4 flex justify-between">Estimez le prix de votre site web<HiArrowRight className="h-6 w-6 text-white"/></button>
          </form>
      </Form>
      )}
    </div>
    )
}

export default SiteWebForm

