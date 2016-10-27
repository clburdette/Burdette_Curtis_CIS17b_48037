#-------------------------------------------------
#
# Project created by QtCreator 2016-10-18T08:23:18
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = SurveyV2
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp \
    runsurvey.cpp \
    build.cpp \
    questionblock.cpp \
    login.cpp \
    signin.cpp

HEADERS  += mainwindow.h \
    runsurvey.h \
    build.h \
    questionblock.h \
    login.h \
    signin.h

FORMS    += mainwindow.ui \
    runsurvey.ui \
    form.ui \
    build.ui \
    questionblock.ui \
    login.ui \
    signin.ui

RESOURCES += \
    icons.qrc
