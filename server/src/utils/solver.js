import { nanoid } from 'nanoid';
export const generateNanoId = (length) => {
return nanoid(length);
}

export const normalizeOriginalUrl = (url) => {
  if (!url) return "";

  if (/^https?:\/\//i.test(url)) {
    return url;
  }


  if (/^www\./i.test(url)) {
    return "http://" + url;
  }

  return "http://" + url;
};

