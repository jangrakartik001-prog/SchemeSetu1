import { BeneficiaryProfile, ProjectDetails, BeneficiaryValidationErrors, ProjectValidationErrors } from '../types';

/**
 * Format a number or string into Indian Rupee format (e.g. ₹2,50,000)
 */
export function formatINR(value: number | string | undefined | null): string {
  if (value === undefined || value === null || value === '') return '₹0';
  
  const num = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]+/g, '')) : value;
  if (isNaN(num)) return '₹0';

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(num);
}

/**
 * Convert numerical INR into words like "₹2.5 Lakh" or "₹12.8 Thousand"
 */
export function formatINRCondensed(value: number | string | undefined | null): string {
  if (value === undefined || value === null || value === '') return '₹0';
  const num = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]+/g, '')) : value;
  if (isNaN(num) || num <= 0) return '₹0';

  if (num >= 10000000) {
    const cr = (num / 10000000).toFixed(2);
    return `₹${parseFloat(cr)} Crore`;
  } else if (num >= 100000) {
    const lakh = (num / 100000).toFixed(2);
    return `₹${parseFloat(lakh)} Lakh`;
  } else if (num >= 1000) {
    const k = (num / 1000).toFixed(1);
    return `₹${parseFloat(k)} Thousand`;
  }
  return `₹${num.toLocaleString('en-IN')}`;
}

/**
 * Validates Beneficiary Profile
 */
export function validateBeneficiaryProfile(profile: BeneficiaryProfile): BeneficiaryValidationErrors {
  const errors: BeneficiaryValidationErrors = {};

  if (!profile.fullName || profile.fullName.trim().length === 0) {
    errors.fullName = 'Full name is required as per government identity documents';
  } else if (profile.fullName.trim().length < 3) {
    errors.fullName = 'Full name must have at least 3 characters';
  }

  if (!profile.age || profile.age.trim() === '') {
    errors.age = 'Age is required to check scheme age eligibility';
  } else {
    const ageNum = parseInt(profile.age, 10);
    if (isNaN(ageNum)) {
      errors.age = 'Please enter a valid age in numbers';
    } else if (ageNum < 18) {
      errors.age = 'Beneficiary must be at least 18 years old for enterprise credit schemes';
    } else if (ageNum > 100) {
      errors.age = 'Please enter a valid age under 100';
    }
  }

  if (!profile.state || profile.state.trim() === '') {
    errors.state = 'State is required to determine regional and state-sponsored schemes';
  }

  if (!profile.district || profile.district.trim() === '') {
    errors.district = 'District is required for local channel partner and branch routing';
  }

  if (!profile.socialCategory || profile.socialCategory.trim() === '') {
    errors.socialCategory = 'Social category is required to assess special subsidy and margin money concessions';
  }

  if (!profile.annualFamilyIncome || profile.annualFamilyIncome.trim() === '') {
    errors.annualFamilyIncome = 'Annual family income is required to determine income-ceiling eligibility';
  } else {
    const incomeNum = parseFloat(profile.annualFamilyIncome.replace(/[^0-9.-]+/g, ''));
    if (isNaN(incomeNum) || incomeNum < 0) {
      errors.annualFamilyIncome = 'Please enter a valid positive annual income in ₹';
    }
  }

  if (!profile.employmentStatus || profile.employmentStatus.trim() === '') {
    errors.employmentStatus = 'Employment / business status is required';
  }

  if (!profile.preferredLanguage || profile.preferredLanguage.trim() === '') {
    errors.preferredLanguage = 'Preferred communication language is required';
  }

  return errors;
}

/**
 * Validates Project Details
 */
export function validateProjectDetails(project: ProjectDetails): ProjectValidationErrors {
  const errors: ProjectValidationErrors = {};

  if (!project.projectName || project.projectName.trim().length === 0) {
    errors.projectName = 'Project / Business name is required';
  }

  if (!project.projectType || project.projectType.trim() === '') {
    errors.projectType = 'Project type / sector is required';
  }

  if (!project.businessNature || project.businessNature.trim() === '') {
    errors.businessNature = 'Please select whether this is a new venture or existing enterprise';
  }

  if (!project.description || project.description.trim().length === 0) {
    errors.description = 'Please provide a brief description of the proposed enterprise / activities';
  } else if (project.description.trim().length < 15) {
    errors.description = 'Description should be at least 15 characters to explain business scope';
  }

  const costNum = parseFloat(project.totalProjectCost.replace(/[^0-9.-]+/g, ''));
  if (!project.totalProjectCost || isNaN(costNum) || costNum <= 0) {
    errors.totalProjectCost = 'Please specify a valid total estimated project cost in ₹';
  }

  const ownNum = parseFloat(project.ownContribution.replace(/[^0-9.-]+/g, ''));
  if (project.ownContribution === '' || project.ownContribution === undefined) {
    errors.ownContribution = 'Own contribution is required (enter 0 if seeking 100% assistance)';
  } else if (isNaN(ownNum) || ownNum < 0) {
    errors.ownContribution = 'Own contribution cannot be negative';
  } else if (!isNaN(costNum) && ownNum > costNum) {
    errors.ownContribution = 'Own contribution cannot exceed the total project cost';
  }

  if (!project.preferredLocation || project.preferredLocation.trim() === '') {
    errors.preferredLocation = 'Project operational location is required';
  }

  if (!project.purposeOfFinancing || project.purposeOfFinancing.trim() === '') {
    errors.purposeOfFinancing = 'Purpose of financing is required for scheme categorization';
  }

  if (project.existingIncome && project.existingIncome.trim() !== '') {
    const existingNum = parseFloat(project.existingIncome.replace(/[^0-9.-]+/g, ''));
    if (isNaN(existingNum) || existingNum < 0) {
      errors.existingIncome = 'Existing income must be a valid positive amount in ₹';
    }
  }

  return errors;
}
