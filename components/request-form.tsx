'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function RequestForm() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        // className="container mx-auto px-4 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          REQUEST FOR CONSIDERATION
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Morem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Morem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label htmlFor="firstName">FIRST NAME *</Label>
              <Input id="firstName" required />
            </div>
            <div className="space-y-4">
              <Label htmlFor="lastName">LAST NAME *</Label>
              <Input id="lastName" required />
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="email">EMAIL ADDRESS *</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-4">
            <Label htmlFor="phone">PHONE NUMBER *</Label>
            <Input id="phone" type="tel" required />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Label htmlFor="city">CITY OF INTEREST *</Label>
              <Input id="city" required />
            </div>
            <div className="space-y-4">
              <Label htmlFor="state">STATE *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label htmlFor="zip">ZIP *</Label>
              <Input id="zip" required />
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="why">WHY ARE YOU INTERESTED IN OWNING?</Label>
            <Textarea id="why" className="min-h-[100px]" />
          </div>

          <div className="space-y-4">
            <Label>
              The minimum cash you will need (without the loan) is $X. do you
              meet this requirement?
            </Label>
            <RadioGroup defaultValue="no">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full">
            SUBMIT
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
