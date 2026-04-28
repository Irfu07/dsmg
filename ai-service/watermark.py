import cv2
def watermark(path):
    img = cv2.imread(path)

    cv2.putText(img, "DSMG_SECURE",
                (30,50),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (255,255,255),2)

    cv2.imwrite(path, img)